import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateRouteDto {
  @ApiProperty({
    example: 1,
    description: 'ID de la ciudad de origen',
  })
  @IsNumber()
  @IsNotEmpty()
  originId: number;

  @ApiProperty({
    example: 2,
    description: 'ID de la ciudad de destino',
  })
  @IsNumber()
  @IsNotEmpty()
  destinationId: number;

  @ApiProperty({
    example: 15.5,
    description: 'Precio de la ruta en dólares',
  })
  @IsNumber()
  @Min(0)
  price: number;
}
