import React from 'react';
import { registerUser } from '../actions/users';

export default function Register() {
  return (
    <div>
      <h2>Register</h2>
      <form action={registerUser}>
        <div>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            placeholder='enter your username'
          />
        </div>

        <div>
          <label htmlFor='email'>email</label>
          <input type='text' name='email' placeholder='enter your email' />
        </div>

        <div>
          <label htmlFor='password'>password</label>
          <input
            type='text'
            name='password'
            placeholder='enter your password'
          />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}
