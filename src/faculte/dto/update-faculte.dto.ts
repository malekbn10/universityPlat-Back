import { PartialType } from '@nestjs/mapped-types';
import { CreateFaculteDto } from './create-faculte.dto';

export class UpdateFaculteDto extends PartialType(CreateFaculteDto) {}
