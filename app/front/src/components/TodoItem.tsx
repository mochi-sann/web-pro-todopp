"use client";

import React from "react";
import { TodoDto } from "../../api/@types";
import { Checkbox } from "./ui/checkbox";

export type TodoItemProps = {
  todoItem: TodoDto;
};

export const TodoItem: React.FC<TodoItemProps> = (props) => {
  return (
    <div className="border-gray-500 border-2 rounded p-4">
      <Checkbox />
      <p className="text-bold">{props.todoItem.text}</p>
      <p className="text-bold">{props.todoItem.description}</p>
    </div>
  );
};
