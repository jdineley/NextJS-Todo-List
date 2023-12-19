"use server";

import { z } from "zod";
import prisma from "@/prisma/client";

const FormSchema = z.object({
  title: z.string().min(1, "Title is required").max(255).optional(),
  description: z.string().min(1, "Description is require").max(65535),
});

export async function createTodo(formData: FormData) {
  const validatedFields = FormSchema.safeParse({
    title: formData.get("title"),
    description: formData.get("description"),
  });
  if (!validatedFields.success) {
    console.log("something went wrong");
    return "something went wrong";
  }
  const { title, description } = validatedFields.data;
  console.log(title, description);
  try {
    const newTodo = await prisma.todo.create({
      data: {
        title: title!,
        description: description!,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
