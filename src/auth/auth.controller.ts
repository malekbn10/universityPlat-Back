import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Register } from './dto/register.dto';
import { Login } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  SignUp(@Body() registerDto : Register){
    return this.authService.register(registerDto);
  }
  @Post('signin')
  SignIn(@Body() loginDto : Login){
    
    return this.authService.login(loginDto);
  }
}
