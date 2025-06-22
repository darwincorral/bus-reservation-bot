import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule)
    private schedulesRepository: Repository<Schedule>,
  ) {}

async create(dto: CreateScheduleDto): Promise<Schedule> {
  const schedule = this.schedulesRepository.create({
    departureTime: dto.departureTime,
    arrivalTime: dto.arrivalTime,
    route: { id: dto.route_id },
    bus: { id: dto.bus_id },
  });
  return this.schedulesRepository.save(schedule);
}
  findAll(): Promise<Schedule[]> {
    return this.schedulesRepository.find();
  }

  async findOne(id: number): Promise<Schedule> {
    const schedule = await this.schedulesRepository.findOneBy({ id });
    if (!schedule) throw new NotFoundException('Schedule not found');
    return schedule;
  }

  async update(id: number, dto: UpdateScheduleDto): Promise<Schedule> {
    const schedule = await this.findOne(id);
    Object.assign(schedule, dto);
    return this.schedulesRepository.save(schedule);
  }

  async remove(id: number): Promise<void> {
    await this.schedulesRepository.delete(id);
  }
}
