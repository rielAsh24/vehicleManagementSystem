// import { Entity } from 'typeorm';

// @Entity()
// export class Vehicle {
//   vehicleNumber: number;
//   vehicleType: string;
//   puc: string;
//   insurance: string;
//   ownerId: number;
// }

import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Vehicles {
  @PrimaryColumn()
  vehicleNumber: number;

  @Column()
  vehicleType: string;

  @Column('mediumblob')
  puc: Buffer;

  @Column('mediumblob')
  insurance: Buffer;

  @Column()
  ownerId?: number;
}
