import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseUUIDPipe,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
import { AlunoService } from './aluno-service';
import { Aluno } from './aluno-entity';

  
  @Controller('alunos')
  export class AlunoController {
    constructor(
      private readonly service: AlunoService,
    e,
    ) {}
  
    @Get()
    findAll(@Query('alunoId') alunoId?: string): Promise<Aluno[]> {
      if (alunoId) {
        return this.service.findByAluno({
          id: String(alunoId),
        } as Aluno);
      }
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', new ParseUUIDPipe()) id: string): Promise<Aluno> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Aluno not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() aluno: Aluno): Promise<Aluno> {
      return this.service.save(aluno);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() aluno: Aluno,
    ): Promise<Aluno> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Aluno not found', HttpStatus.NOT_FOUND);
      }
  
      aluno.id = found.id;
  
      return this.service.save(aluno);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseUUIDPipe) id: string): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Aluno not found', HttpStatus.NOT_FOUND);
      }
  
      return this.service.remove(id);
    }
  
     
    
  }