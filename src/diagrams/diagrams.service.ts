import { Injectable } from '@nestjs/common';
import { CreateDiagramDto } from './dto/create-diagram.dto';
import { UpdateDiagramDto } from './dto/update-diagram.dto';

@Injectable()
export class DiagramsService {
  create(createDiagramDto: CreateDiagramDto) {
    return 'This action adds a new diagram';
  }

  findAll() {
    return `This action returns all diagrams`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diagram`;
  }

  update(id: number, updateDiagramDto: UpdateDiagramDto) {
    return `This action updates a #${id} diagram`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagram`;
  }
}
