import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

import { DriverService } from './driver.service';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { CreateDriverDto } from './dto/create-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Post()
  @UseInterceptors(FileInterceptor('profilePhoto'))
  create(
    @Body() createDriverDto: CreateDriverDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const { driverName, phoneNumber } = createDriverDto;
    const profilePhoto = file.buffer;
    return this.driverService.createDriver({
      driverName,
      phoneNumber,
      profilePhoto,
    });
  }

  @Get()
  findAll() {
    return this.driverService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDriverDto: UpdateDriverDto) {
    return this.driverService.update(+id, updateDriverDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.driverService.remove(+id);
  }
}
