// import { Entity } from 'typeorm';

// @Entity()
// export class Driver {
//   id: number;
//   driverName: string;
//   phoneNumber: string;
//   profilePhoto: string;
// }

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Drivers {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  driverName: string;

  @Column()
  phoneNumber: string;

  @Column('mediumblob')
  profilePhoto: Buffer;
}
