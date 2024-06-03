import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Drivers } from '../driver/entities/driver.entity';
import { Transfers } from '../transfer/entities/transfer.entity';
import { Vehicles } from '../vehicle/entities/vehicle.entity';
import { ConfigModule } from '@nestjs/config';

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
  ],
})
export class DatabaseModule {}
