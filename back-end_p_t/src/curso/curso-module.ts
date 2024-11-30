import { Module } from '@nestjs/common';
import { CursoService } from './curso-service';
import { CursoController } from './curso-controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Curso } from './curso-entity';

@Module({
  imports: [TypeOrmModule.forFeature([Curso])],
  providers: [CursoService],
  controllers: [CursoController],
})
export class CursoModule {}