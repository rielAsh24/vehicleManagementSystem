import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Vehicles } from './entities/vehicle.entity';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicles)
    private VehicleRepository: Repository<Vehicles>,
  ) {}

  create(createVehicleDto: CreateVehicleDto) {
    return this.VehicleRepository.insert(createVehicleDto);
  }

  findAll() {
    return this.VehicleRepository.find();
  }

  findOne(vehicleId: number) {
    return this.VehicleRepository.findOneBy({
      vehicleNumber: vehicleId,
    });
  }

  update(id: number, updateVehicleDto: UpdateVehicleDto) {
    return this.VehicleRepository.update(
      { vehicleNumber: id },
      updateVehicleDto,
    );
  }

  remove(id: number) {
    return this.VehicleRepository.delete(+id);
  }
}
