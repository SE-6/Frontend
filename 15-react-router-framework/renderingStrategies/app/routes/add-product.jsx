import { Form } from 'react-router';

export async function clientAction({ request }) {
  const formData = await request.formData();

  const title = formData.get('title');
  const price = formData.get('price');
  const category = formData.get('category');

  const res = await fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title,
      price: Number(price),
      description: 'Test product',
      image: 'something.png',
      category,
    }),
  });

  console.log('Status', res.status);

  const newProduct = await res.json();
  console.log('Response: ', newProduct);
  return newProduct;
}

export default function AddProduct({ actionData }) {
  console.log('actionData:', actionData);

  return (
    <div>
      <h2>Add Product</h2>
      <Form method='post'>
        <div>
          <label>Title:</label>
          <input name='title' placeholder='product title' required />
        </div>

        <div>
          <label>Price:</label>
          <input name='price' placeholder='$9.99' required />
        </div>

        <div>
          <label>Category:</label>
          <input name='category' placeholder='product category' required />
        </div>
        <button type='submit'>Add Product</button>
      </Form>

      {actionData && (
        <div>
          <h2>Product Added! ✅</h2>
          <p>ID: {actionData.id}</p>
          <p>Title: {actionData.title}</p>
          <p>Price: {actionData.price}</p>
        </div>
      )}
    </div>
  );
}
