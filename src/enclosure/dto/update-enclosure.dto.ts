import { PartialType } from '@nestjs/mapped-types';
import { CreateEnclosureDto } from './create-enclosure.dto';
import { IsUUID } from 'class-validator';

export class UpdateEnclosureDto extends PartialType(CreateEnclosureDto) {
  @IsUUID()
  id!: string;
}
