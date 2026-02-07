import {
    IsString,
    IsOptional,
    Length,
    IsNotEmpty,
} from 'class-validator';

export class CreateHabitatDto {
    @IsString()
    @Length(1, 50)
    @IsNotEmpty()
    habitatCode?: string;

    @IsString()
    @Length(1, 100)
    @IsNotEmpty()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    climate?: string;
}