import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FaculteService } from './faculte.service';
import { CreateFaculteDto } from './dto/create-faculte.dto';
import { UpdateFaculteDto } from './dto/update-faculte.dto';

@Controller('faculte')
export class FaculteController {
  constructor(private readonly faculteService: FaculteService) {}

  @Post()
  create(@Body() createFaculteDto: CreateFaculteDto) {
    return this.faculteService.create(createFaculteDto);
  }

  @Get()
  findAll() {
    return this.faculteService.findAll();
  }

  @Get(':score/:speciality')
  async find(@Param('score') score: number,@Param('speciality') speciality:string) {
    return await this.faculteService.findByScoreAndSpeciality(score,speciality);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFaculteDto: UpdateFaculteDto) {
  //   return this.faculteService.update(+id, updateFaculteDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.faculteService.remove(+id);
  // }
}
