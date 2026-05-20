'use client';

import { SubmitEventHandler, useState } from 'react';

const FormHandler = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit: SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    if (!email) {
      setError('Email is required');
      return;
    }

    console.log('Submitted', email);
  };

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={() => setError(null)}>Try again</button>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='email' type='email' placeholder='your@mail.com' />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormHandler;
