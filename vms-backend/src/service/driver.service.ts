import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Driver } from '../entity/driver.entity';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private driverRepository: Repository<Driver>,
  ) {}

  async getAllDriver() {
    return await this.driverRepository.find({
      select: {
        id: false,
        profilePhoto: false,
      },
    });
  }

  async getADriver(driverId: number) {
    return await this.driverRepository.findOneBy({ id: driverId });
  }

  async addDriver(newDriver: Driver) {
    return await this.driverRepository.insert(newDriver);
  }

  async updateDriver(newDriver: Driver) {
    return await this.driverRepository.update({ id: newDriver.id }, newDriver);
  }

  async deleteDriver(driverId: Driver) {
    return await this.driverRepository.delete(driverId);
  }
}
