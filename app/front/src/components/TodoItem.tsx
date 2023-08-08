"use client";

import React, { useState } from "react";
import { TodoDto } from "../../api/@types";
import { Checkbox } from "./ui/checkbox";
import { AspidaClient } from "@/lib/utils";
import { useToast } from "./ui/use-toast";
import { title } from "process";
import { Button } from "./ui/button";
import Link from "next/link";

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
  const onDelete = async () => {
    await AspidaClient.todo._id(props.todoItem.id).delete();
    toast({
      title: "削除しました",
    });
    window.location.reload();
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
      <Link href={`/todo/${props.todoItem.id}`}>
        <div className="flex-1">
          <p className="font-bold text-lg">{todoItem.text}</p>
          <p className="">{props.todoItem.description}</p>
        </div>
      </Link>
      <div className="">
        <Button onClick={onDelete}>Delete</Button>
      </div>
    </div>
  );
};
