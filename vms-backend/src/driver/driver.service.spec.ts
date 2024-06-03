import { Test, TestingModule } from '@nestjs/testing';
import { DriverService } from './driver.service';
import { DriverProvider } from './driver-provider';

describe('DriverService', () => {
  let service: DriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [...DriverProvider],
    }).compile();

    service = module.get<DriverService>(DriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
