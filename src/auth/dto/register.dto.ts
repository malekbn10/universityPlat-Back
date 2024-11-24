import { Transform } from "@nestjs/class-transformer";
import { IsEmail, IsString, MinLength } from "@nestjs/class-validator";


export class Register {
    @IsString()
    @MinLength(3)
    name:string;
    @IsEmail()
    email:string;
    @IsString()
    @MinLength(8)
    @Transform(({ value })=> value.trim())
    password:string;
}
