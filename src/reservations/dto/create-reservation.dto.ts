import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateReservationDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ example: 2 })
  @IsNumber()
  @IsNotEmpty()
  scheduleId: number;

  @ApiProperty({ example: 12 })
  @IsNumber()
  @IsNotEmpty()
  seatNumber: number;

  @ApiProperty({ example: 'https://miapp.com/comprobante.jpg' })
  @IsNotEmpty()
  comprobanteUrl: string;
}
