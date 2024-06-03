import { Test, TestingModule } from '@nestjs/testing';

import { DriverModule } from '../driver/driver.module';
import { VehicleModule } from '../vehicle/vehicle.module';
import { DatabaseModule } from '../database/database.module';

import { TransferController } from './transfer.controller';
import { TransferProvider } from './transfer-provider';

describe('TransferController', () => {
  let controller: TransferController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DriverModule, VehicleModule, DatabaseModule],
      controllers: [TransferController],
      providers: [...TransferProvider],
    }).compile();

    controller = module.get<TransferController>(TransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
