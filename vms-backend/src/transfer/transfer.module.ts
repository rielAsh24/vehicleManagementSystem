import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Transfers } from './entities/transfer.entity';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';

import { DriverModule } from '../driver/driver.module';
import { VehicleModule } from '../vehicle/vehicle.module';

@Module({
  imports: [TypeOrmModule.forFeature([Transfers]), DriverModule, VehicleModule],
  controllers: [TransferController],
  providers: [TransferService],
  exports: [TransferService],
})
export class TransferModule {}
