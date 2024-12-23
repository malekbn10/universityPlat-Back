import { IsDate, IsEmail } from "@nestjs/class-validator";

export class CreateUserDto {
    name:string;
    @IsEmail()
    email:string;
    password:string;
    @IsDate()
    birthDate:Date;
}
