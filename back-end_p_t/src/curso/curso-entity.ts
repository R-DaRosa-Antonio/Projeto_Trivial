import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('curso')
export class Curso {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ length: 60, nullable: false })
  name: string;
}