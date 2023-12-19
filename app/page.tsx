import prisma from "@/prisma/client";
import AddTodoForm from "./AddTodoForm";
import { Button, Card, Flex, Text } from "@radix-ui/themes";
import { DeleteTodo } from "./ui/buttons";

export default async function Home() {
  const issues = await prisma.todo.findMany();
  //console.log(issues);
  return (
    <div className="max-w-xl space-y-3">
      <h1 className="text-2xl mb-6">Todos</h1>
      <AddTodoForm />
      {issues.map((issue) => (
        <Card key={issue.id}>
          <Flex justify="between" align="center" gap="3">
            <div>
              <Text size="6" as="div">
                {issue.title}
              </Text>
              <Text size="3" as="div">
                {issue.description}
              </Text>
            </div>
            <DeleteTodo id={issue.id} />
          </Flex>
        </Card>
      ))}
    </div>
  );
}
