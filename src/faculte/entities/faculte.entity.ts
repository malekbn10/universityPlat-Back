import { Column, Entity } from "typeorm";

@Entity()
export class Faculte {
    @Column({primary:true,generated:true})
    id : number;
    @Column({length:50})
    name : string ;
    @Column({length:50})
    instituteName : string;
    @Column({length:50})
    speciality  : string;
    @Column({nullable:false})
    nbPlaces : number ;
    @Column({nullable:false})
    score : number;
    @Column("simple-array")
    tags : string[];
}
