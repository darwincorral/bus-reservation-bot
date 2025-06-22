import { IsNotEmpty, IsDateString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
  @ApiProperty({ example: 1, description: 'ID de la ruta asociada' })
  @IsNumber()
  @IsNotEmpty()
  route_id: number;

  @ApiProperty({ example: '2025-07-01T08:00:00Z', description: 'Fecha y hora de salida' })
  @IsDateString()
  @IsNotEmpty()
  departureTime: string;

  @ApiProperty({ example: '2025-07-01T12:00:00Z', description: 'Fecha y hora de llegada' })
  @IsDateString()
  @IsNotEmpty()
  arrivalTime: string;

  @ApiProperty({ example: 1, description: 'ID del bus asignado' })
  @IsNumber()
  @IsNotEmpty()
  bus_id: number;
}
