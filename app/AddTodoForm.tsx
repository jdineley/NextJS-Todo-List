"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";
import React, { useRef, useState } from "react";
import { createTodo } from "@/app/lib/actions";
import { useFormState } from "react-dom";
import { State } from "@/app/lib/actions";

export default function AddTodoForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState<State, FormData>(
    createTodo,
    initialState
  );
  const ref = useRef<HTMLFormElement>(null);
  console.log("state", state);
  return (
    <form
      ref={ref}
      action={async (formData) => {
        await dispatch(formData);
        ref.current?.reset();
      }}
      className="space-y-3"
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Title"
          name="title"
          aria-describedby="title error"
        />
      </TextField.Root>
      <div id="title-error" aria-live="polite" aria-atomic="true">
        {state.errors?.title &&
          state.errors.title.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <TextArea
        placeholder="Description"
        name="description"
        aria-describedby="description error"
      />
      <div id="description-error" aria-live="polite" aria-atomic="true">
        {state.errors?.description &&
          state.errors.description.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
      <Button className="w-full">Add</Button>
      {state.message && (
        <p className="mt-2 text-sm text-red-500">{state.message}</p>
      )}
    </form>
  );
}
