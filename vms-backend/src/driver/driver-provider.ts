import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Drivers } from './entities/driver.entity';
import { DriverService } from './driver.service';

export const DriverProvider = [
  DriverService,
  {
    provide: getRepositoryToken(Drivers),
    useClass: Repository,
  },
];
