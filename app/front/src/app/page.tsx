import { NewTodo } from "@/components/newTodo";
import { Button } from "@/components/ui/button";
import { AspidaClient } from "@/lib/utils";
import { AspidaResponse, BasicHeaders } from "aspida";
import { TodoDto } from "../../api/@types";

const getTodos = async () => {
  const todo: AspidaResponse<TodoDto[], BasicHeaders, 200> =
    await AspidaClient.todo.get();
  return todo;
};

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="flex flex-col gap max-w-3xl m-auto">
      <NewTodo />
      {todos.body.map((todo) => (
        <div>
          <pre>{JSON.stringify(todo, null, 2)}</pre>
        </div>
      ))}
    </main>
  );
}
