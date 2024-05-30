import { Body, Controller, Get, Post } from '@nestjs/common';

import { DriverService } from './driver/driver.service';
import { VehicleService } from './vehicle/vehicle.service';
import { TransferService } from './transfer/transfer.service';

@Controller()
export class AppController {
  constructor(
    private readonly driverService: DriverService,
    private readonly vehicleService: VehicleService,
    private readonly transferService: TransferService,
  ) {}

  @Get()
  getHello(): string {
    return 'Hello to Vehicle Management';
  }

  @Post()
  async transferVehicle(@Body() transferData: { vid: number; to: number }) {
    const vehicle = await this.vehicleService.findOne(transferData.vid);
    const toDriver = await this.driverService.findOne(transferData.to);

    return this.transferService.create({
      v_num: vehicle.vehicleNumber,
      fromOwner: vehicle.ownerId,
      toOwner: toDriver.id,
      t_date: new Date().toISOString().split('T')[0],
    });
  }
}
