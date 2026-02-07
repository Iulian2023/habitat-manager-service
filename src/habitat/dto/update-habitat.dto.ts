import { PartialType } from '@nestjs/mapped-types';
import { CreateHabitatDto } from './create-habitat.dto';
import { IsUUID } from 'class-validator';

export class UpdateHabitatDto extends PartialType(CreateHabitatDto) {
  @IsUUID()
  id!: string;
}
