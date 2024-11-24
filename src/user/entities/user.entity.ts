import { Column, Entity } from "typeorm";

export enum Roles {
    Admin = 'admin',
    User = 'user'
}


@Entity()
export class User {
    @Column({primary:true,generated:true})
    id : number;
    @Column({length:50})
    name : string;
    @Column({unique:true,nullable:false})
    email:string;
    @Column({nullable:false})
    password:string;
    @Column({default:"user"})
    role:Roles;
    @Column()
    birthDate:Date;
}
