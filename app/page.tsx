import Image from "next/image";
import AddForm from "./AddForm";
import { Button, Card, Container, Flex } from "@radix-ui/themes";

export default function Home() {
  return (
    <div className="max-w-xl space-y-3">
      <h1 className="text-2xl mb-6">Todos</h1>
      <AddForm />

      <Card>
        <Flex justify="between" align="center" gap="3">
          <p>This is my longer todo... dfdafadfasdf dsfasdsdFASDF ASDFASDFA</p>
          <Button>Delete</Button>
        </Flex>
      </Card>
    </div>
  );
}
