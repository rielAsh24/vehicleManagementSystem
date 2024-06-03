import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';

import { DriverModule } from './driver/driver.module';
import { TransferModule } from './transfer/transfer.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [DriverModule, VehicleModule, TransferModule, DatabaseModule],
  controllers: [AppController],
})
export class AppModule {}
