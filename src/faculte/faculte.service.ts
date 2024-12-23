import { Injectable } from '@nestjs/common';
import { CreateFaculteDto } from './dto/create-faculte.dto';
import { UpdateFaculteDto } from './dto/update-faculte.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculte } from './entities/faculte.entity';
import { LessThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class FaculteService {
  constructor(@InjectRepository(Faculte) 
  private readonly faculteRepository : Repository<Faculte>
){}
  async create(createFaculteDto: CreateFaculteDto) {
    return await this.faculteRepository.save(createFaculteDto);
  }

  async findAll() {
    return await this.faculteRepository.find();
  }

  async findByScoreAndSpeciality( score:number,speciality : string ){
    let specialityRes =  await this.faculteRepository.findBy({score: LessThanOrEqual(score)});
    let SpecialityFinalRes = specialityRes.filter(faculte =>faculte.tags.includes(speciality))
    return SpecialityFinalRes;

  }

  // findOne(id: number) {
  //   return `This action returns a #${id} faculte`;
  // }

  // update(id: number, updateFaculteDto: UpdateFaculteDto) {
  //   return `This action updates a #${id} faculte`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} faculte`;
  // }
}
