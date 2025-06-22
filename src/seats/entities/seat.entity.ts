import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Bus } from 'src/buses/entities/bus.entity';

@Entity()
export class Seat {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'A1' })
  @Column()
  number: string;

  @ApiProperty({ example: true })
  @Column({ default: true })
  isAvailable: boolean;

  @ApiProperty({ example: 1, description: 'ID del bus al que pertenece el asiento' })
  @ManyToOne(() => Bus, (bus) => bus.seats, { onDelete: 'CASCADE' })
  bus: Bus;
}
