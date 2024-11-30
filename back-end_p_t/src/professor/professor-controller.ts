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
  import { ProfessorService } from './professor-service';
  import { Professor } from './professor-entity';
  
  @Controller('/professors')
  export class ProfessorController {
    constructor(private service: ProfessorService) {}
  
    @Get()
    findAll(): Promise<Professor[]> {
      return this.service.findAll();
    }
  
    @Get(':id')
    async findById(@Param('id', ParseIntPipe) id: number): Promise<Professor> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Professor not found', HttpStatus.NOT_FOUND);
  
      return found;
    }
  
    @Post()
    create(@Body() professor: Professor): Promise<Professor> {
      return this.service.save(professor);
    }
  
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() professor: Professor,
    ): Promise<Professor> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Professor not found', HttpStatus.NOT_FOUND);
  
      professor.id = found.id;
  
      return this.service.save(professor);
    }
  
    @Delete(':id')
    @HttpCode(204)
    async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
      const found = await this.service.findById(id);
  
      if (!found)
        throw new HttpException('Professor not found', HttpStatus.NOT_FOUND);
  
      return this.service.remove(id);
    }
  }