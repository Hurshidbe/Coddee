import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, BadRequestException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { UsersService } from '../users/users.service';
import { LoginDto, refreshTwoTokents } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly UserService : UsersService
  ) {}

  @Post('register')
  async register(
    @Body() dto : RegisterDto
  ){
    if(dto.password!==dto.confirmPassword) throw new BadRequestException('passwords birxilmas')
    return this.UserService.create(dto)
  }

  @Post('login')
  async login(
    @Body() dto : LoginDto
  ){
    return await this.authService.login(dto)
  }

  @Post('refresh')                               
  async refreshTwoTokents(@Body() dto : refreshTwoTokents){
    return await this.authService.refreshAll(dto.refresh_token) 
  }

  @Get('check-username/:username')
  async checkUsername(@Param('username') username: string) {
    const normalizedUsername = username.toLowerCase().trim();
    return await this.UserService.isUsernameAvailable(normalizedUsername);
  }
}
