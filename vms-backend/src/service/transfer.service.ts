import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transfer } from '../entity/transfer.entity';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Transfer)
    private transferRepository: Repository<Transfer>,
  ) {}

  async getAllTransfers() {
    return this.transferRepository.find({
      select: {
        t_id: false,
      },
    });
  }

  async getTransfer(transferId: number) {
    return this.transferRepository.findOneBy({ t_id: transferId });
  }

  async getTransfersByDate(transferDate: Date) {
    return this.transferRepository.find({
      where: {
        t_date: transferDate,
      },
    });
  }
}
