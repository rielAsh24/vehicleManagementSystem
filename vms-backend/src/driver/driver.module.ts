import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Drivers } from './entities/driver.entity';
import { DriverController } from './driver.controller';
import { DriverService } from './driver.service';

@Module({
  imports: [TypeOrmModule.forFeature([Drivers])],
  controllers: [DriverController],
  providers: [DriverService],
  exports: [DriverService],
})
export class DriverModule {}
