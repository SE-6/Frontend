'use client';

import { useActionState } from 'react';
import { addRecipe } from '../actions/recipe';

export default function AddRecipe() {
  const [state, formAction, isPending] = useActionState(addRecipe, {
    error: null,
    success: false,
  });

  return (
    <>
      <h2>Add Recipe</h2>
      <form action={formAction}>
        <input name='title' placeholder='Recipe title' required />
        <input name='category' placeholder='Category' required />
        <input
          name='duration'
          type='number'
          placeholder='Duration (min)'
          required
        />
        <input name='servings' type='number' placeholder='Servings' required />

        {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
        {state.success && <p style={{ color: 'green' }}>{state.message}</p>}

        <button type='submit' disabled={isPending}>
          {isPending ? 'Adding...' : 'Add Recipe'}
        </button>
      </form>
    </>
  );
}
