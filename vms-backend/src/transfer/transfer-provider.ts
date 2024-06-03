import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transfers } from './entities/transfer.entity';
import { TransferService } from './transfer.service';

export const TransferProvider = [
  TransferService,
  {
    provide: getRepositoryToken(Transfers),
    useClass: Repository,
  },
];
