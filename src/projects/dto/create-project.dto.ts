import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateProjectDto {
  @IsString()
  projectName: string;

  @IsDateString()
  initDate: Date;

  @IsString()
  @MaxLength(250)
  shortDescription: string;

  @IsString()
  @MaxLength(10)
  version: string;

  @IsString()
  @IsOptional()
  largeDescription?: string;
}
