import { IsString, IsOptional, Length, IsUUID, IsNotEmpty, IsInt, Min, Max } from 'class-validator';

export class CreateEnclosureDto {
  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  name!: string;

  @IsString()
  @Length(1, 100)
  @IsNotEmpty()
  codeEnclosure!: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  description?: string;

  @IsOptional()
  @IsUUID()
  habitatId?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(10)
  capacity?: number;
}
