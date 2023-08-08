import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import {
  ApiOperation,
  ApiParam,
  ApiProduces,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TodoDto } from './entities/todo.entity';

@ApiTags('/todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Todo を登録する' })
  @ApiResponse({
    status: 201,
    description: '登録したメンバー設定を返却',
    type: TodoDto,
  })
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Todo Todo一覧を返す' })
  @ApiResponse({
    status: 200,
    description: 'Todo を一覧で取得する',
    type: [TodoDto],
  })
  findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Todo 単体取得API' })
  @ApiParam({
    name: 'id',
    type: Number,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: TodoDto,
  })
  findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Todo を更新する' })
  @ApiParam({
    name: 'id',
    example: 1,
    type: Number,
  })
  @ApiResponse({
    status: 201,
    description: '登録したTodoを返却',
    type: TodoDto,
  })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @ApiProduces('application/json; charset=utf-8')
  @ApiOperation({ summary: 'Todo を削除する' })
  @ApiParam({
    name: 'id',
    example: 1,
    type: Number,
  })
  @ApiResponse({
    status: 201,
    description: '削除したTodoを返却',
    type: TodoDto,
  })
  remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
