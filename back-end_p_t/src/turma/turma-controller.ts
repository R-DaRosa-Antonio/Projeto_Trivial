import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    ParseUUIDPipe,
    Post,
    Put,
  } from '@nestjs/common';
  import { TurmaService } from './turma-service';
  import { Turma } from './turma-entity';
  
  @Controller('/turmas')
  export class TurmaController {
    constructor(private service: TurmaService) {}
  
    @Get()
    findAll(): Promise<Turma[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Turma> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Turma not found', HttpStatus.NOT_FOUND);
  
      return found;
    }
  
    @Post()
    create(@Body() turma: Turma): Promise<Turma> {
      return this.service.save(turma);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() turma: Turma,
    ): Promise<Turma> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Turma not found', HttpStatus.NOT_FOUND);
  
      turma.id = found.id;
  
      return this.service.save(turma);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Turma not found', HttpStatus.NOT_FOUND);
  
      return this.service.remove(id);
    }
  }