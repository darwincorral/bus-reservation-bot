import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBusDto {
  @ApiProperty({ example: 'ABC-1234', description: 'Número de placa del bus' })
  @IsString()
  @IsNotEmpty()
  plateNumber: string;

  @ApiProperty({ example: 'Mercedes Benz 2020', description: 'Modelo del bus' })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({ example: 40, description: 'Capacidad del bus' })
  @IsNumber()
  capacity: number;
}
