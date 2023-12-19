"use client";

import { Button, TextField } from "@radix-ui/themes";
import React from "react";

export default function AddForm() {
  return (
    <form className="space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="New Todo" />
      </TextField.Root>
      <Button className="w-full">Add</Button>
    </form>
  );
}
