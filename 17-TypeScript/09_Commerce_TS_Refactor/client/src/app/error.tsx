'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className='empty'>
      <p style={{ marginBottom: 16 }}>Something went wrong: {error.message}</p>
      <button className='btn btn-add' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}