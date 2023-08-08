"use client";

import React, { useState } from "react";
import { TodoDto } from "../../api/@types";
import { Checkbox } from "./ui/checkbox";
import { AspidaClient } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { title } from "process";

export interface TodoItemProps {
  todoItem: TodoDto;
}
export const TodoItem: React.FC<TodoItemProps> = (props) => {
  const { todoItem } = props;

  const [checked, setChecked] = useState(props.todoItem.done);
  const { toast } = useToast();
  const onCheckedChange = async (e: boolean) => {
    setChecked(e);
    const checkupdate = await AspidaClient.todo._id(props.todoItem.id).patch({
      body: {
        done: e,
        text: props.todoItem.text,
        description: props.todoItem.description,
      },
    });
    toast({
      title: "update",
      description: JSON.stringify(checkupdate),
    });
  };
  return (
    <div
      className={`border-gray-500 border-2 rounded p-4 flex flex-row items-center gap-2 ${
        checked ? "text-slate-400 line-through" : "text-slate-950"
      }`}
    >
      <div className="flex">
        <Checkbox
          id={`TodoCheckBox.${todoItem.id.toString()}`}
          defaultChecked={props.todoItem.done}
          onCheckedChange={(e: boolean) => onCheckedChange(e)}
        />
      </div>
      <div>
        <p className="font-bold text-lg">{todoItem.text}</p>
        <p className="">{props.todoItem.description}</p>
      </div>
    </div>
  );
};
