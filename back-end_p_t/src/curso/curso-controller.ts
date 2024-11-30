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
    Post,
    Put,
  } from '@nestjs/common';
  import { Curso } from 'src/curso/curso-entity';
  import { CursoService } from 'src/curso/curso-service';
  
  @Controller('cursos')
  export class CursoController {
    constructor(private service: CursoService) {}
  
    @Get()
    findAll(): Promise<Curso[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Curso> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Curso not found', HttpStatus.NOT_FOUND);
      }
  
      return found;
    }
  
    @Post()
    create(@Body() curso: Curso): Promise<Curso> {
      return this.service.save(curso);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() curso: Curso,
    ): Promise<Curso> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Curso not found', HttpStatus.NOT_FOUND);
      }
  
      curso.id = found.id;
  
      return this.service.save(curso);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found) {
        throw new HttpException('Curso not found', HttpStatus.NOT_FOUND);
      }
  
      return this.service.remove(id);
    }
  }