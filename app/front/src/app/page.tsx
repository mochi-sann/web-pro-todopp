import { Button } from "@/components/ui/button";
import { AspidaClient } from "@/lib/utils";

const getTodos = async () => {
  return await AspidaClient.todo.get();
};

export default async function Home() {
  const todo = await getTodos();
  return (
    <main>
      <Button>ボタン</Button>
      {JSON.stringify(todo)}
    </main>
  );
}
