import { ApiProperty } from '@nestjs/swagger';

export type Todo = {
  id: number;
  text: string;
  description: string;
  done: boolean;
  createdAt: Date;
};

export class TodoDto {
  @ApiProperty()
  id: number;

  /**
   * the todo text
   * @example task
   */
  @ApiProperty()
  text: string;

  @ApiProperty({
    description: 'the todo description',
    example: 'task description',
  })
  description: string;

  @ApiProperty({
    description: 'the todo status',
    example: false,
  })
  done: boolean;

  @ApiProperty()
  createdAt: Date;
}
