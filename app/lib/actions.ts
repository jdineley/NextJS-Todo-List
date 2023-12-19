"use server";

import { z } from "zod";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const FormSchema = z.object({
  title: z.string().min(1, "Title is required").max(255).optional(),
  description: z.string().min(1, "Description is require").max(65535),
});

export type State = {
  errors?: {
    title?: string[];
    description?: string[];
  };
  message?: string | null;
};

export async function createTodo(prevState: State, formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields, Failed to Create Invoice",
    };
  }
  const { title, description } = validatedFields.data;
  // console.log(title, description);
  try {
    const newTodo = await prisma.todo.create({
      data: {
        title: title!,
        description: description!,
      },
    });
  } catch (error) {
    return {
      message: "Database Error: Failed to Create Invoice.",
    };
  }

  revalidatePath("/");
  return { message: null, errors: {} };
  // redirect("/");
}

export async function deleteTodo(id: number) {
  try {
    await prisma.todo.delete({
      where: {
        id,
      },
    });
    revalidatePath("/");
  } catch (error) {
    console.log("Could not delete the todo");
  }
}
