import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './entities/seat.entity';
import { Bus } from 'src/buses/entities/bus.entity';

@Injectable()
export class SeatsService {
  constructor(
    @InjectRepository(Seat)
    private seatRepository: Repository<Seat>,
    @InjectRepository(Bus)
    private busRepository: Repository<Bus>,
  ) {}

  async create(dto: CreateSeatDto) {
    const bus = await this.busRepository.findOne({ where: { id: dto.busId } });
    if (!bus) throw new NotFoundException('Bus no encontrado');

    const seat = this.seatRepository.create({ ...dto, bus });
    return this.seatRepository.save(seat);
  }

  findAll() {
    return this.seatRepository.find({ relations: ['bus'] });
  }

  async findOne(id: number) {
    const seat = await this.seatRepository.findOne({ where: { id }, relations: ['bus'] });
    if (!seat) throw new NotFoundException('Asiento no encontrado');
    return seat;
  }

  async update(id: number, dto: UpdateSeatDto) {
    const seat = await this.findOne(id);

    if (dto.busId && dto.busId !== seat.bus.id) {
      const bus = await this.busRepository.findOne({ where: { id: dto.busId } });
      if (!bus) throw new NotFoundException('Bus no encontrado');
      seat.bus = bus;
    }

    Object.assign(seat, dto);
    return this.seatRepository.save(seat);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.seatRepository.delete(id);
  }
}
