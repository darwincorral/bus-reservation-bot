import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { Schedule } from 'src/schedules/entities/schedule.entity';
import { Reservation } from './entities/reservation.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation, User, Schedule])],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
