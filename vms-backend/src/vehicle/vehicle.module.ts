import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Vehicles } from './entities/vehicle.entity';
import { VehicleService } from './vehicle.service';
import { VehicleController } from './vehicle.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicles])],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [VehicleService],
})
export class VehicleModule {}
