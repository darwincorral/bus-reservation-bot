import { City } from 'src/cities/entities/city.entity';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => City, city => city.originRoutes, { eager: true })
  origin: City;

  @ManyToOne(() => City, city => city.destinationRoutes, { eager: true })
  destination: City;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @OneToMany(() => Schedule, (schedule) => schedule.route)
  schedules: Schedule[];
}
