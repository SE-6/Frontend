'use server';

import { revalidatePath } from 'next/cache';

export async function addTodo(formData) {
  // save the changes to DB

  revalidatePath('/todos');
}
