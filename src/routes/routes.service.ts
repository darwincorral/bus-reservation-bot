import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private routeRepository: Repository<Route>,
  ) {}

  create(dto: CreateRouteDto) {
    const route = this.routeRepository.create(dto);
    return this.routeRepository.save(route);
  }

  findAll() {
    return this.routeRepository.find();
  }

  async findOne(id: number) {
    const route = await this.routeRepository.findOneBy({ id });
    if (!route) throw new NotFoundException('Ruta no encontrada');
    return route;
  }

  async update(id: number, dto: UpdateRouteDto) {
    const route = await this.findOne(id);
    Object.assign(route, dto);
    return this.routeRepository.save(route);
  }

  async remove(id: number) {
    const route = await this.findOne(id);
    return this.routeRepository.remove(route);
  }
}
