import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { VehicleService } from './vehicle.service';
import { Vehicles } from './entities/vehicle.entity';

export const VehicleProvider = [
  VehicleService,
  {
    provide: getRepositoryToken(Vehicles),
    useClass: Repository,
  },
];
