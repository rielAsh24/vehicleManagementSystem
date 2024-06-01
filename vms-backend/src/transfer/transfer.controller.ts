import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { TransferService } from './transfer.service';
import { DriverService } from 'src/driver/driver.service';
import { VehicleService } from 'src/vehicle/vehicle.service';

@Controller('transfer')
export class TransferController {
  constructor(
    private readonly driverService: DriverService,
    private readonly vehicleService: VehicleService,
    private readonly transferService: TransferService,
  ) {}

  @Get()
  findAll() {
    return this.transferService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transferService.findOne(+id);
  }

  // @Get()
  // findByDate(@Query() t_date: string) {
  //   return this.transferService.findOneByDate(new Date(t_date));
  // }

  @Post()
  async transferVehicle(@Body() transferData: { vid: number; to: number }) {
    const vehicle = await this.vehicleService.findOne(transferData.vid);
    const toDriver = await this.driverService.findOne(transferData.to);

    if (!vehicle)
      throw new HttpException('Vehicle Not Found', HttpStatus.NOT_FOUND);

    if (!toDriver)
      throw new HttpException('Driver Not Found', HttpStatus.NOT_FOUND);

    this.vehicleService.update(vehicle.vehicleNumber, { ownerId: toDriver.id });

    return this.transferService.create({
      v_num: vehicle.vehicleNumber,
      fromOwner: vehicle.ownerId,
      toOwner: toDriver.id,
      t_date: new Date().toISOString().split('T')[0],
    });
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.transferService.remove(+id);
  // }
}
