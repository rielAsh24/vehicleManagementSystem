import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Drivers } from './entities/driver.entity';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Drivers)
    private driverRepository: Repository<Drivers>,
  ) {}

  createDriver(newDriver: CreateDriverDto) {
    return this.driverRepository.insert({
      driverName: newDriver.driverName,
      phoneNumber: newDriver.phoneNumber,
      profilePhoto: newDriver.profilePhoto,
    });
  }

  findAll() {
    return this.driverRepository.find({
      select: {
        driverName: true,
        phoneNumber: true,
      },
    });
  }

  findOne(driverId: number) {
    return this.driverRepository.findOneBy({ id: driverId });
  }

  update(driverId: number, newDriver: UpdateDriverDto) {
    return this.driverRepository.update({ id: driverId }, newDriver);
  }

  remove(driverId: number) {
    return this.driverRepository.delete(driverId);
  }
}
