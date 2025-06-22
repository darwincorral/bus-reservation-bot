import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RoutesModule } from './routes/routes.module';
import { SchedulesModule } from './schedules/schedules.module';
import { ReservationsModule } from './reservations/reservations.module';
import { BusesModule } from './buses/buses.module';
import { AdminsModule } from './admins/admins.module';
import { SeatsModule } from './seats/seats.module';
import { Schedule } from './schedules/entities/schedule.entity';
import { Bus } from './buses/entities/bus.entity';
import { Route } from './routes/entities/route.entity';
import { User } from './users/entities/user.entity';
import { Reservation } from './reservations/entities/reservation.entity';
import { Admin } from './admins/entities/admin.entity';
import { Seat } from './seats/entities/seat.entity';

@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'bus_reservation',
      entities: [User, Route, Schedule, Reservation, Admin, Bus, Seat],
      synchronize: true, // ⚠️ usar solo en desarrollo
    }),
      UsersModule,
      RoutesModule,
      SchedulesModule,
      ReservationsModule,
      BusesModule,
      AdminsModule,
      SeatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
