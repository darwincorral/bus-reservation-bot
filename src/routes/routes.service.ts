import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Route } from './entities/route.entity';
import { City } from 'src/cities/entities/city.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectRepository(Route)
    private routeRepository: Repository<Route>,
    @InjectRepository(City)
    private cityRepository: Repository<City>,

  ) {}

  async create(dto: CreateRouteDto) {
    const origin = await this.cityRepository.findOneBy({ id: dto.originId });
    const destination = await this.cityRepository.findOneBy({ id: dto.destinationId });

    if (!origin || !destination) {
      throw new NotFoundException('Ciudad de origen o destino no encontrada');
    }

    const route = this.routeRepository.create({
      origin,
      destination,
      price: dto.price,
    });

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
