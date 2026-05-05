export async function loader() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
  );
  const posts = await res.json();
  return posts;
}

// hydrate... => ssr

export default function SsrDemo({ loaderData }) {
  return (
    <div>
      <h2>SSR DEMO</h2>
      <p>
        This data was fetched on the server - not visible in the Network tab
      </p>
      <ul>
        {loaderData.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export function ErrorBoundary() {
  return <h2>Something went wrong!</h2>;
}
