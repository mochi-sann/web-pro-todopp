import { AspidaClient } from "@/lib/utils";
import { AspidaResponse } from "aspida";

const getTodos = async (id: number) => {
  const todo = await AspidaClient.todo._id(Number(id)).get();
  return todo;
};
export default async function TodoItemPage({
  params,
}: {
  params: { id: string };
}) {
  const todos = await getTodos(Number(params.id));
  return (
    <main className="flex flex-col gap-2 max-w-3xl m-auto">
      {JSON.stringify(todos)}
    </main>
  );
}
