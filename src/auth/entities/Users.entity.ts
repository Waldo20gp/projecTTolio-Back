import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', {
    unique: true,
  })
  nickname: string;

  @Column('varchar')
  name: string;

  @Column('varchar')
  lastname: string;

  @Column('date')
  birthday: Date;

  @Column('varchar', {
    select: false,
  })
  password: string;

  @Column('varchar', {
    unique: true,
  })
  email: string;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;
}
