import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BusesService } from './buses.service';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Buses') // Agrupa los endpoints bajo "Buses"
@Controller('buses')
export class BusesController {
  constructor(private readonly busesService: BusesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo bus' })
  @ApiResponse({ status: 201, description: 'Bus creado correctamente.' })
  create(@Body() dto: CreateBusDto) {
    return this.busesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los buses' })
  findAll() {
    return this.busesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un bus por ID' })
  findOne(@Param('id') id: string) {
    return this.busesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un bus' })
  update(@Param('id') id: string, @Body() dto: UpdateBusDto) {
    return this.busesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un bus' })
  remove(@Param('id') id: string) {
    return this.busesService.remove(+id);
  }
}
