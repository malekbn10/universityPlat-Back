import { Transform } from "@nestjs/class-transformer";
import { Column, Entity } from "typeorm";

@Entity()
export class Event {
        @Column({primary:true,generated:true})
        id : number;
        @Column({length:50})
        name : string;
        @Column({ type: 'date' })
        eventDate:Date;
        @Column()
        description:string;
}
