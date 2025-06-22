import { IsBoolean, IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSeatDto {
  @ApiProperty({ example: 'A1' })
  @IsString()
  @IsNotEmpty()
  number: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  isAvailable: boolean;

  @ApiProperty({ example: 1 })
  @IsNumber()
  busId: number;
}
