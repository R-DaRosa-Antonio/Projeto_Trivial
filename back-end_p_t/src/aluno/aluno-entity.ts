import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';

  
  @Entity('aluno')
  export class Aluno {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column({ nullable: false })
    nome: string;
  
    @Column({nullable: false })
    ra: string;
  
    @Column({nullable: false })
    data_nascimento: string;
  
    @Column({ nullable: false })
    idade: string;

    @Column({ nullable: false })
    rg: string;
  }
