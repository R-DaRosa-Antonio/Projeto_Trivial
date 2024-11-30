import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('turma')
export class Turma {
  @PrimaryGeneratedColumn()
  id: string ;

  @Column({ length: 40, nullable: false })
  name: string;
}