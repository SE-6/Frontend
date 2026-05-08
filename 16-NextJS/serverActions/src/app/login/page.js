'use client';

import { useActionState } from 'react';
import { loginUser } from '../actions/auth';

export default function Login() {
  const [actionState, formAction, isPending] = useActionState(loginUser, {
    error: null,
    success: false,
  });

  return (
    <div>
      <h2>Login</h2>
      <form action={formAction}>
        <div>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='your email' />
        </div>

        <div>
          <label htmlFor='password'>password</label>
          <input type='password' name='password' placeholder='your password' />
        </div>

        {actionState.error && (
          <p style={{ color: 'red' }}>{actionState.error}</p>
        )}

        {actionState.success && (
          <p style={{ color: 'green' }}>{actionState.message}</p>
        )}

        {/* <button type='submit'>Login</button> */}

        <button type='submit' disabled={isPending}>
          {isPending ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
