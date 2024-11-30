import { Repository } from 'typeorm';
import { Turma } from './turma-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TurmaService {
  constructor(
    @InjectRepository(Turma)
    private repository: Repository<Turma>,
  ) {}

  findAll(): Promise<Turma[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Turma> {
    return this.repository.findOneBy({ id: id });
  }

  save(turma: Turma): Promise<Turma> {
    return this.repository.save(turma);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}