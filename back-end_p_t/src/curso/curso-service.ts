import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Curso } from 'src/curso/curso-entity';
import { Repository } from 'typeorm';

@Injectable()
export class CursoService {
  constructor(
    @InjectRepository(Curso)
    private repository: Repository<Curso>,
  ) {}

  findAll(): Promise<Curso[]> {
    return this.repository.find({
      where: {
        active: true,
      },
    });
  }

  findById(id: number): Promise<Curso> {
    return this.repository.findOneBy({ id: id });
  }

  save(curso: Curso): Promise<Curso> {
    return this.repository.save(curso);
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}