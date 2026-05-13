'use server';

import { neon } from '@neondatabase/serverless';
import { revalidatePath } from 'next/cache';

export async function getRecipes() {
  const sql = neon(process.env.DATABASE_URL);
  const recipes = await sql`SELECT * FROM recipes ORDER BY created_at DESC`;
  return recipes;
}

export async function addRecipe(prevState, formData) {
  const sql = neon(process.env.DATABASE_URL);

  const title = formData.get('title');
  const category = formData.get('category');
  const duration = Number(formData.get('duration'));
  const servings = Number(formData.get('servings'));

  if (!title || !category || !duration || !servings) {
    return { error: 'all fields are required' };
  }

  await sql`
    INSERT INTO recipes (title, category, duration, servings)
    VALUES (${title}, ${category}, ${duration}, ${servings})
  `;

  revalidatePath('/');
  return { success: true, message: `${title} is added!` };
}

export async function deleteRecipe(id) {
  const sql = neon(process.env.DATABASE_URL);
  await sql`DELETE FROM recipes WHERE ID = ${id}`;
  revalidatePath('/');
}
