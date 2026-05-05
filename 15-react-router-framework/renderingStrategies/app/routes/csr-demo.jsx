export async function clientLoader() {
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
  );
  const posts = await res.json();
  return posts;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}

export default function CsrDemo({ loaderData }) {
  return (
    <div>
      <h2>CSR DEMO</h2>
      <p>
        This data was fetched in the browser - check network tab in Devtools
      </p>
      <ul>
        {loaderData.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
