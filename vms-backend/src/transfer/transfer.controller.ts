import { Controller, Get, Param } from '@nestjs/common';

import { TransferService } from './transfer.service';

@Controller('transfer')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

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

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.transferService.remove(+id);
  // }
}
