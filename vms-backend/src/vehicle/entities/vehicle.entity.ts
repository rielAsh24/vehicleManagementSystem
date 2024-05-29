// import { Entity } from 'typeorm';

// @Entity()
// export class Vehicle {
//   vehicleNumber: number;
//   vehicleType: string;
//   puc: string;
//   insurance: string;
//   ownerId: number;
// }

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicles {
  @PrimaryGeneratedColumn()
  vehicleNumber: number;

  @Column()
  vehicleType: string;

  @Column()
  puc: string;

  @Column()
  insurance: string;

  @Column()
  ownerId: number;
}
