import { Entity } from 'typeorm';

@Entity()
export class Vehicle {
  vehicleNumber: number;
  vehicleType: string;
  puc: string;
  insurance: string;
  ownerId: number;
}
