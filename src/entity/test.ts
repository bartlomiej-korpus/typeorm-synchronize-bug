import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Tests')
export class Test {
  @PrimaryGeneratedColumn()
  public id: number;
}
