import { addProduct } from '../actions/products';

export default function Product() {
  return (
    <div>
      <h2>Add Product</h2>
      <form action={addProduct}>
        <input name='title' placeholder='product title' />
        <input name='price' placeholder='Price' />
        <button type='submit'>Add Product</button>
      </form>
    </div>
  );
}
