import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { Reservation } from './entities/reservation.entity';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ReservationsService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepo: Repository<Reservation>,
    @InjectRepository(User)
    private userRepo: Repository<User>,
    @InjectRepository(Schedule)
    private scheduleRepo: Repository<Schedule>,
  ) {}

  async create(dto: CreateReservationDto) {
    const user = await this.userRepo.findOneBy({ id: dto.userId });
    const schedule = await this.scheduleRepo.findOneBy({ id: dto.scheduleId });

    if (!user || !schedule) {
      throw new NotFoundException('Usuario o horario no encontrados');
    }

    const reservation = this.reservationRepo.create({
      user,
      schedule,
      seatNumber: dto.seatNumber,
      comprobanteUrl: dto.comprobanteUrl,
      status: 'pendiente',
    });

    return this.reservationRepo.save(reservation);
  }

  findAll() {
    return this.reservationRepo.find({ relations: ['user', 'schedule'] });
  }

  async findOne(id: number) {
    const reservation = await this.reservationRepo.findOne({
      where: { id },
      relations: ['user', 'schedule'],
    });
    if (!reservation) throw new NotFoundException('Reserva no encontrada');
    return reservation;
  }

  async update(id: number, dto: UpdateReservationDto) {
    const reservation = await this.findOne(id);
    Object.assign(reservation, dto);
    return this.reservationRepo.save(reservation);
  }

  async remove(id: number) {
    const reservation = await this.findOne(id);
    return this.reservationRepo.remove(reservation);
  }
}
