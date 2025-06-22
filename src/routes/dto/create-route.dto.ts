import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsNumber, Min } from 'class-validator';

export class CreateRouteDto {
  @ApiProperty({ example: 'Quito' })
  @IsString()
  @IsNotEmpty()
  origin: string;

  @ApiProperty({ example: 'Guayaquil' })
  @IsString()
  @IsNotEmpty()
  destination: string;

  @ApiProperty({ example: 15.5 })
  @IsNumber()
  @Min(0)
  price: number;
}
