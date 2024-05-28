import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Driver } from './entity/driver.entity';
import { Vehicle } from './entity/vehicle.entity';
import { Transfer } from './entity/transfer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: Bun.env.HOST,
      port: Number(Bun.env.PORT),
      username: Bun.env.MYSQL_USER,
      password: Bun.env.MYSQL_PW,
      database: Bun.env.DB_NAME,
      entities: [Driver, Vehicle, Transfer],
    }),
  ],
})
export class AppModule {}
