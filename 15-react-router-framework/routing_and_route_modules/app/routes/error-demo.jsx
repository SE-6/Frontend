export async function loader() {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Response('Failed to fetch', { status: res.status });

  return res.json();
}

export default function ErrorDemo({ loaderData }) {
  //   console.log(loaderData);

  return (
    <div>
      <h2>Error Demo</h2>
      <p>This will never render!</p>
    </div>
  );
}

export function ErrorBoundary() {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <p>Could not load the data</p>
    </div>
  );
}
