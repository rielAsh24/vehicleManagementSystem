import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Vehicle } from '../entity/Vehicle.entity';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private VehicleRepository: Repository<Vehicle>,
  ) {}

  async getAllVehicle() {
    return await this.VehicleRepository.find();
  }

  async getAVehicle(vehicleNumber: number) {
    return await this.VehicleRepository.findOneBy({
      vehicleNumber: vehicleNumber,
    });
  }

  async addVehicle(newVehicle: Vehicle) {
    return await this.VehicleRepository.insert(newVehicle);
  }

  async updateVehicle(newVehicle: Vehicle) {
    return await this.VehicleRepository.update(
      { vehicleNumber: newVehicle.vehicleNumber },
      newVehicle,
    );
  }

  async deleteVehicle(vehicleNumber: Vehicle) {
    return await this.VehicleRepository.delete(vehicleNumber);
  }
}
