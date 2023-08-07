import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodoService {
  create(createTodoDto: CreateTodoDto) {
    return { id: 1, ...createTodoDto };
  }

  findAll(): Todo[] {
    return [
      { id: 1, text: 'Hello World', done: false, description: 'hoge' },
      { id: 2, text: 'Hello World', done: false, description: 'hoge' },
    ];
  }

  findOne(id: number): Todo {
    return { id: id, text: 'Hello World', done: false, description: 'hoge' };
  }

  update(id: number, updateTodoDto: UpdateTodoDto) {
    return { id: id, ...updateTodoDto };
  }

  remove(id: number): string {
    return `This action removes a #${id} todo`;
  }
}
