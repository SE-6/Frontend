'use client';

export default function GlobalError({ error }) {
  return (
    <div>
      <h2>ERROR</h2>
      <p>{error.message}</p>
    </div>
  );
}
