import { IsNotEmpty, IsString, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Juan Pérez' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ example: '+593987654321' })
  @IsNotEmpty()
  @Matches(/^\+?\d+$/, { message: 'Debe ser un número de teléfono válido' })
  phoneNumber: string;
}
