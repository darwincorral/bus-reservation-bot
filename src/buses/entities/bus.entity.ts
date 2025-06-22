import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Seat } from 'src/seats/entities/seat.entity';
import { Schedule } from 'src/schedules/entities/schedule.entity';

@Entity()
export class Bus {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Número de placa del bus' })
  @Column()
  plateNumber: string;

  @ApiProperty({ description: 'Modelo del bus' })
  @Column()
  model: string;

  @ApiProperty({ description: 'Capacidad total de asientos' })
  @Column()
  capacity: number;

  @OneToMany(() => Seat, (seat) => seat.bus)
  seats: Seat[];

  @OneToMany(() => Schedule, (schedule) => schedule.bus)
  schedules: Schedule[];
}
