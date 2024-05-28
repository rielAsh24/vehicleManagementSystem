import { Entity } from 'typeorm';

@Entity()
export class Driver {
  id: number;
  driverName: string;
  phoneNumber: string;
  profilePhoto: string;
}
