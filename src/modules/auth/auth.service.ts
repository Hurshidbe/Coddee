import { BadRequestException, HttpException, HttpStatus, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../users/entities/user.entity';
import { Model, Types } from 'mongoose';
import { RefToken } from './entities/refreshToken.schema';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import {v4 as uuid} from 'uuid'
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly UserRepo : Model<UserDocument>,
    @InjectModel(RefToken.name) private readonly refTokenRepo : Model<RefToken>,
    private readonly jwt : JwtService
  ){}

  async login(dto : LoginDto){
    const user = await this.UserRepo.findOne({email : dto.email})                     
    if (!user) throw new UnauthorizedException('email or password incorrect')         
    const passwordMatch = await bcrypt.compare(dto.password , user.password)        
    if(!passwordMatch) throw new UnauthorizedException('email or password incorrect') 
    return await this.generateTokens(user._id)                                      
  }

  async generateTokens (userId : Types.ObjectId){                                       
    const accessToken = this.jwt.sign({userId}, {expiresIn : '15m'})                    
    const refreshToken =  uuid()                                                        
    await this.storefreshToken(refreshToken, userId)                                   
    return {accessToken, refreshToken}                                                  
  }

  async storefreshToken(token : string, userId : Types.ObjectId){                      
     await this.refTokenRepo.updateOne(
       {userId}, 
       {$set: {token, expiryDate: new Date(Date.now() + (7*24*60**2*1000))}}, 
       {upsert : true}
     )
  }

  async refreshAll(refresh_token : string){                                            
    const token = await this.refTokenRepo.findOne({                                
      token : refresh_token,                                                         
      expiryDate : {$gte : new Date()}                                              
    }) 
    if(!token) throw new UnauthorizedException()                                      
      return await this.generateTokens(token.userId)                                   
  }
}
