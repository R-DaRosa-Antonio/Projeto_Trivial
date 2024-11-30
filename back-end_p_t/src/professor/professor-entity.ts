import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('professor')
export class Professor {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 40, nullable: false })
  name: string;
}