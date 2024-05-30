import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Transfers } from './entities/transfer.entity';
import { CreateTransferDto } from './dto/create-transfer.dto';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Transfers)
    private transferRepository: Repository<Transfers>,
  ) {}

  create(transfer: CreateTransferDto) {
    return this.transferRepository.insert(transfer);
  }

  findAll() {
    return this.transferRepository.find({
      select: {
        t_id: false,
      },
    });
  }

  findOne(transferId: number) {
    return this.transferRepository.findOneBy({ t_id: transferId });
  }

  // findOneByDate(transferDate: Date) {
  //   console.log(transferDate);
  //   return this.transferRepository.findBy({
  //     t_date: transferDate,
  //   });
  // }

  // update(id: number, updateTransferDto: UpdateTransferDto) {
  //   return `This action updates a #${id} transfer`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} transfer`;
  // }
}
