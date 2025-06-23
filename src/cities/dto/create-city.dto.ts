import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class CreateCityDto {
  @ApiProperty({ example: 'Quito' })
  @IsString()
  @MinLength(2)
  name: string;
}
