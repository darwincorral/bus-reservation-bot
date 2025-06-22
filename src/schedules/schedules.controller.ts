import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@ApiTags('Schedules')
@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear un nuevo horario' })
  @ApiResponse({ status: 201, description: 'Horario creado correctamente.' })
  create(@Body() dto: CreateScheduleDto) {
    return this.schedulesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos los horarios' })
  findAll() {
    return this.schedulesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un horario por ID' })
  findOne(@Param('id') id: string) {
    return this.schedulesService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar un horario' })
  update(@Param('id') id: string, @Body() dto: UpdateScheduleDto) {
    return this.schedulesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar un horario' })
  remove(@Param('id') id: string) {
    return this.schedulesService.remove(+id);
  }
}
