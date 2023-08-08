/* eslint-disable */
export type CreateTodoDto = {
  text: string;
  description: string;
  done: boolean;
};

export type TodoDto = {
  id: number;
  /** the todo text */
  text: string;
  /** the todo description */
  description: string;
  /** the todo status */
  done: boolean;
  createdAt: string;
};

export type UpdateTodoDto = {
  text: string;
  description: string;
  done: boolean;
};
