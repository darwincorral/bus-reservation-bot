import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Reservation } from 'src/reservations/entities/reservation.entity';

@Entity()
export class User {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Juan Pérez' })
  @Column()
  name: string;

  @ApiProperty({ example: '+593987654321' })
  @Column({ unique: true })
  phoneNumber: string;

  @OneToMany(() => Reservation, reservation => reservation.user)
  reservations: Reservation[];
}
