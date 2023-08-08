import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoDto } from './entities/todo.entity';
import { prisma } from 'database';

@Injectable()
export class TodoService {
  async create(createTodoDto: CreateTodoDto): Promise<TodoDto> {
    const todo = await prisma.todo.create({
      data: {
        text: createTodoDto.text,
        description: createTodoDto.description,
        done: createTodoDto.done,
      },
    });
    return todo;
  }

  async findAll(): Promise<TodoDto[]> {
    return await prisma.todo.findMany({
      orderBy: { id: 'desc' },
    });
  }

  async findOne(id: number): Promise<TodoDto> {
    return await prisma.todo.findUnique({
      where: { id: id },
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto): Promise<TodoDto> {
    return await prisma.todo.update({
      where: { id: id },
      data: {
        done: updateTodoDto.done,
        text: updateTodoDto.text,
        description: updateTodoDto.description,
      },
    });
  }

  async remove(id: number): Promise<TodoDto> {
    return await prisma.todo.delete({ where: { id: id } });
  }
}
