"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React from "react";
import { createTodo } from "./lib/actions";

export default function AddTodoForm() {
  return (
    <form action={createTodo} className="space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Title" name="title" />
      </TextField.Root>
      <TextArea placeholder="Description" name="description" />
      <Button className="w-full">Add</Button>
    </form>
  );
}
