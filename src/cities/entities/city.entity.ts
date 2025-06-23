import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Route } from '../../routes/entities/route.entity';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'Identificador único de la ciudad' })
  id: number;

  @Column({ unique: true })
  @ApiProperty({ example: 'Quito', description: 'Nombre de la ciudad' })
  name: string;

  @OneToMany(() => Route, route => route.origin)
  @ApiProperty({ type: () => [Route], description: 'Rutas donde esta ciudad es origen' })
  originRoutes: Route[];

  @OneToMany(() => Route, route => route.destination)
  @ApiProperty({ type: () => [Route], description: 'Rutas donde esta ciudad es destino' })
  destinationRoutes: Route[];
}
