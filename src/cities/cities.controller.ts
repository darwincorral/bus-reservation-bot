// src/cities/cities.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { ValidateCityDto } from './dto/validate-city.dto';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Post()
  @ApiOperation({ summary: 'Crear nueva ciudad' })
  @ApiResponse({ status: 201, type: City })
  create(@Body() dto: CreateCityDto) {
    return this.citiesService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar ciudades' })
  @ApiResponse({ status: 200, type: [City] })
  findAll() {
    return this.citiesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una ciudad por ID' })
  @ApiResponse({ status: 200, type: City })
  findOne(@Param('id') id: string) {
    return this.citiesService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Actualizar una ciudad por ID' })
  @ApiResponse({ status: 200, type: City })
  update(@Param('id') id: string, @Body() dto: UpdateCityDto) {
    return this.citiesService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una ciudad por ID' })
  @ApiResponse({ status: 204 })
  remove(@Param('id') id: string) {
    return this.citiesService.remove(+id);
  }

  @Post('validar')
  @ApiOperation({ summary: 'Valida y normaliza una ciudad' })
  async validarCiudad(@Body() body: ValidateCityDto) {
    const { ciudad } = body;

    const resultado = await this.citiesService.validarCiudad(ciudad);

    return resultado;
  }
}
