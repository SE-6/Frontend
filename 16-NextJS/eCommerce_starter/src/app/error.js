'use client';

export default function Error({ error, reset }) {
  return (
    <div className='empty'>
      <p style={{ marginBottom: 16 }}>Something went wrong: {error.message}</p>
      <button className='btn btn-add' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
