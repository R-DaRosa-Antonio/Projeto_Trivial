import { TurmaService } from './turma/turma-service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfessorService } from './professor/professor-service';
import { CursoService } from './curso/curso-service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProfessorService,
    CursoService,
    TurmaService
  ],
})
export class AppModule {}