import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { FaculteModule } from './faculte/faculte.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "orientationplat",
    autoLoadEntities: true,
    synchronize: true,
    entities:[
      __dirname + "entities/**/*.entity.ts"

    ]
    }),UserModule, AuthModule, FaculteModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
