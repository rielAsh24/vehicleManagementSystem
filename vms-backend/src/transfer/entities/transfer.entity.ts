// import { Entity } from 'typeorm';

// @Entity()
// export class Transfer {
//   t_id: number;
//   v_num: number;
//   fromOwner: number;
//   toOwner: number;
//   t_date: Date;
// }

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transfers {
  @PrimaryGeneratedColumn()
  t_id: number;

  @Column()
  v_num: number;

  @Column()
  fromOwner: number;

  @Column()
  toOwner: number;

  @Column('date')
  t_date: Date;
}
