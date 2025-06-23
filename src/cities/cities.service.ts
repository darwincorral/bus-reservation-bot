// src/cities/cities.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import Fuse from 'fuse.js';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async create(dto: CreateCityDto): Promise<City> {
    const city = this.cityRepository.create(dto);
    return this.cityRepository.save(city);
  }

  findAll(): Promise<City[]> {
    return this.cityRepository.find({ relations: ['originRoutes', 'destinationRoutes'] });
  }

  async findOne(id: number): Promise<City> {
    const city = await this.cityRepository.findOne({
      where: { id },
      relations: ['originRoutes', 'destinationRoutes'],
    });
    if (!city) throw new NotFoundException('City not found');
    return city;
  }

  async update(id: number, dto: UpdateCityDto): Promise<City> {
    const city = await this.findOne(id);
    Object.assign(city, dto);
    return this.cityRepository.save(city);
  }

  async remove(id: number): Promise<void> {
    const city = await this.findOne(id);
    await this.cityRepository.remove(city);
  }



  async validarCiudad(texto: string) {
    // Normalizar el texto
    const textoNormalizado = texto.trim().toLowerCase();

    // Dividir en palabras (tokenizar)
    const palabras = textoNormalizado.split(/\s+/);

    // Obtener todas las ciudades
    const ciudades = await this.cityRepository.find();

    // Crear el Fuse con las ciudades
    const fuse = new Fuse(ciudades, {
      keys: ['name'],
      threshold: 0.2,
      minMatchCharLength: 3,
    });

    // Buscar en cada palabra del texto la mejor coincidencia
    for (const palabra of palabras) {
      const resultados = fuse.search(palabra);

      if (resultados.length > 0) {
        const mejor = resultados[0].item;
        return {
          valido: true,
          ciudadNormalizada: mejor.name,
        };
      }
    }

    // Nada encontrado
    return {
      valido: false,
      sugerencia: null,
    };
  }
}
