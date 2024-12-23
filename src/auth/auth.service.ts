import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Register } from './dto/register.dto';
import * as bcryptjs from 'bcrypt'
import { Login } from './dto/login.dto';
@Injectable()
export class AuthService {
  constructor(
    private readonly userService : UserService,
    private readonly jwtService : JwtService
  ){}



  generateJwt(payload) {
    return  this.jwtService.signAsync(payload);
  }

  async register({name,email,password,birthDate}:Register){
    const user = await this.userService.findOneByEmail(email);
    if (user) {
      throw new BadRequestException("Email already exists");
    }
    const hashedPassword = await bcryptjs.hash(password,10);
    await this.userService.create({name,email,birthDate,password:hashedPassword})
    return {
      "message" : "User created successfully"
    };
  }

  async login({email , password}:Login){
    const user = await this.userService.findOneByEmail(email);
    console.log(user);
    
    if (!user) {
      throw new UnauthorizedException("Invalid email");
  }
  const isPasswordValid = await bcryptjs.compare(password,user.password);
  if (!isPasswordValid) {
      throw new UnauthorizedException("Invalid password");
  }
  const payload = {email : user.email , name:user.name , role:user.role}
  const token=await this.generateJwt(payload)
  return {
      "token" : token,
      "name" : user.name,
  };
  }
}
