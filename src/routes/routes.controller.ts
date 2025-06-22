import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Routes')
@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Ruta creada exitosamente' })
  create(@Body() createRouteDto: CreateRouteDto) {
    return this.routesService.create(createRouteDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Lista de rutas' })
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Ruta encontrada' })
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Ruta actualizada' })
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Ruta eliminada' })
  remove(@Param('id') id: string) {
    return this.routesService.remove(+id);
  }
}
