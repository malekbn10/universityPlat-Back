import { IsDate } from "@nestjs/class-validator";

export class CreateEventDto {
    id:number;
    name : string;
    @IsDate()
    eventDate:Date;
    description:string;

}
