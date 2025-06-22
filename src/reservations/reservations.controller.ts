import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('Reservations')
@Controller('reservations')
export class ReservationsController {
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Reserva creada' })
  create(@Body() dto: CreateReservationDto) {
    return this.reservationsService.create(dto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Todas las reservas' })
  findAll() {
    return this.reservationsService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Una reserva' })
  findOne(@Param('id') id: string) {
    return this.reservationsService.findOne(+id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Reserva actualizada' })
  update(@Param('id') id: string, @Body() dto: UpdateReservationDto) {
    return this.reservationsService.update(+id, dto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Reserva eliminada' })
  remove(@Param('id') id: string) {
    return this.reservationsService.remove(+id);
  }
}
