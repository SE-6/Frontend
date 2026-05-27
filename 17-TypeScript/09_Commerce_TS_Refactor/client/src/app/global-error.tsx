// Global fallback catches any error that wasn't handled by a route-level error.js
// Replaces the entire page, so it needs <html> and <body>

'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className='empty'>
          <p style={{ marginBottom: 16, color: 'pink' }}>
            Something went wrong: {error.message}
          </p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}