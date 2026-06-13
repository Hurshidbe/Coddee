import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { RefToken, RefTokenSchema } from './entities/refreshToken.schema';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports : [
    JwtModule.registerAsync({
          imports : [ConfigModule],
          inject: [ConfigService],
          useFactory: async(config : ConfigService)=>({
            secret : config.get<string>('JWT_SECRET'),
            signOptions : {
              expiresIn : config.get('JWT_EXPIRE')
            }
          })
        }),
      MongooseModule.forFeature([
        {schema : UserSchema, name : User.name},
        {name : RefToken.name, schema: RefTokenSchema}
      ])
    ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
