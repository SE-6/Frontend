export async function loader() {
  return { name: 'Alice', age: 25 };
}

export default function LoaderDemo({ loaderData }) {
  console.log(loaderData);

  return (
    <div>
      <h2>Loader Demo</h2>
      <p>Name: {loaderData.name}</p>
      <p>Age: {loaderData.age}</p>
    </div>
  );
}
