import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatsService } from './seats.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Seats')
@Controller('seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo asiento' })
  create(@Body() dto: CreateSeatDto) {
    return this.seatsService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los asientos' })
  findAll() {
    return this.seatsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un asiento por ID' })
  findOne(@Param('id') id: string) {
    return this.seatsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar un asiento' })
  update(@Param('id') id: string, @Body() dto: UpdateSeatDto) {
    return this.seatsService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un asiento' })
  remove(@Param('id') id: string) {
    return this.seatsService.remove(+id);
  }
}
