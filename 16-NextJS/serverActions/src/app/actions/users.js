'use server';

import { redirect } from 'next/navigation';

export async function registerUser(formData) {
  // const token = request.headers.get('Authorization')

  const username = formData.get('username');
  const email = formData.get('email');
  const password = formData.get('password');

  if (!username || !email || !password) {
    throw new Error('All fields are required');
  }

  console.log('User registered:', { username, email, password });
  // here we would save to db

  redirect('dashboard');
}
