import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aluno } from './aluno-entity';

@Injectable()
export class AlunoService {
  constructor(
    @InjectRepository(Aluno)
    private repository: Repository<Aluno>,
  ) {}

  findAll(): Promise<Aluno[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Aluno> {
    return this.repository.findOneBy({ id: id });
  }

  findByAluno(category: Aluno): Promise<Aluno[]> {
    return this.repository.find()


    
  }

  save(aluno: Aluno): Promise<Aluno> {
    return this.repository.save(aluno);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}