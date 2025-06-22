import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Reservation {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 5 })
  @Column()
  seatNumber: number;

  @ApiProperty({ example: 'pendiente', enum: ['pendiente', 'confirmada', 'cancelada'] })
  @Column({ default: 'pendiente' })
  status: 'pendiente' | 'confirmada' | 'cancelada';

  @ApiProperty({ example: 'https://miapp.com/comprobante.jpg' })
  @Column()
  comprobanteUrl: string;

  @ApiProperty({ type: () => User })
  @ManyToOne(() => User, user => user.reservations, { eager: true, onDelete: 'CASCADE' })
  user: User;

  @ApiProperty({ type: () => Schedule })
  @ManyToOne(() => Schedule, schedule => schedule.reservations, { eager: true, onDelete: 'CASCADE' })
  schedule: Schedule;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
