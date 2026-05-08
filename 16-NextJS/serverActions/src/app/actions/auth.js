'use server';

export async function loginUser(prevState, formData) {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return { error: 'All fields are required' };
  }

  if (password !== '123456') {
    return { error: 'Invalid credentials' };
  }

  console.log('user logged in:', { email });

  return {
    success: true,
    message: 'Logged in successfully',
  };
}
