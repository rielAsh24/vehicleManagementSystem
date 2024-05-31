import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';

import { DriverModule } from './driver/driver.module';
import { TransferModule } from './transfer/transfer.module';
import { VehicleModule } from './vehicle/vehicle.module';

import { Transfers } from './transfer/entities/transfer.entity';
import { Drivers } from './driver/entities/driver.entity';
import { Vehicles } from './vehicle/entities/vehicle.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PW,
      database: process.env.DB_NAME,
      entities: [Drivers, Vehicles, Transfers],
    }),
    DriverModule,
    VehicleModule,
    TransferModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
