import { Entity } from 'typeorm';

@Entity()
export class Transfer {
  t_id: number;
  v_num: number;
  fromOwner: number;
  toOwner: number;
  t_date: Date;
}
