import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';

@Module({
  imports:[UserModule,JwtModule.register({
    global:true,
    secret:jwtConstants.secret,
    signOptions : {expiresIn : '1h'}
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}