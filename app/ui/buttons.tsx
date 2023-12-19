import { Button } from "@radix-ui/themes";
import { deleteTodo } from "../lib/actions";

export function DeleteTodo({ id }: { id: number }) {
  const deleteTodoWithId = deleteTodo.bind(null, id);
  return (
    <form action={deleteTodoWithId}>
      <Button className="grow">Delete</Button>
    </form>
  );
}
