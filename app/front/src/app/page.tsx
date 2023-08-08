import { NewTodo } from "@/components/newTodo";
import { Button } from "@/components/ui/button";
import { AspidaClient } from "@/lib/utils";

const getTodos = async () => {
  const todo = await AspidaClient.todo.get();
  return todo;
};

export default async function Home() {
  const todo = await getTodos();
  return (
    <main>
      <Button>ボタン</Button>
      <NewTodo />
    </main>
  );
}
