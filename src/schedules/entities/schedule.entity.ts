import { Bus } from 'src/buses/entities/bus.entity';
import { Reservation } from 'src/reservations/entities/reservation.entity';
import { Route } from 'src/routes/entities/route.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Schedule {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  departureTime: string;

  @Column()
  arrivalTime: string;

  @ManyToOne(() => Route, route => route.schedules, { onDelete: 'CASCADE' })
  route: Route;

  @ManyToOne(() => Bus, bus => bus.schedules, { onDelete: 'CASCADE' })
  bus: Bus;

  @OneToMany(() => Reservation, reservation => reservation.schedule)
  reservations: Reservation[];
}
