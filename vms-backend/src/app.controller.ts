import {
  Controller,
  // Delete,
  Get,
  // Param
} from '@nestjs/common';

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

  // @Delete(':id')
  // async deleteVehicle(@Param('id') id: string) {
  //   this.vehicleService.update(+id, { ownerId: null });
  //   this.transferService.remove(+id);
  //   return this.vehicleService.remove(+id);
  // }
}
