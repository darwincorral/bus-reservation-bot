import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bus } from './entities/bus.entity';
import { CreateBusDto } from './dto/create-bus.dto';
import { UpdateBusDto } from './dto/update-bus.dto';

@Injectable()
export class BusesService {
  constructor(
    @InjectRepository(Bus)
    private busRepo: Repository<Bus>,
  ) {}

  create(dto: CreateBusDto) {
    const bus = this.busRepo.create(dto);
    return this.busRepo.save(bus);
  }

  findAll() {
    return this.busRepo.find();
  }

  findOne(id: number) {
    return this.busRepo.findOneBy({ id });
  }

  update(id: number, dto: UpdateBusDto) {
    return this.busRepo.update(id, dto);
  }

  remove(id: number) {
    return this.busRepo.delete(id);
  }
}
