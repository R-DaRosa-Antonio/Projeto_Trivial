import { Repository } from 'typeorm';
import { Professor } from './professor-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProfessorService {
  constructor(
    @InjectRepository(Professor)
    private repository: Repository<Professor>,
  ) {}

  findAll(): Promise<Professor[]> {
    return this.repository.find();
  }

  findById(id: number): Promise<Professor> {
    return this.repository.findOneBy({ id: id });
  }

  save(professor: Professor): Promise<Professor> {
    return this.repository.save(professor);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}