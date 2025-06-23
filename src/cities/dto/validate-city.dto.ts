import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class ValidateCityDto {
  @ApiProperty({
    example: 'Quito',
    description: 'Nombre de la ciudad a validar',
  })
  @IsString()
  @IsNotEmpty()
  ciudad: string;
}
