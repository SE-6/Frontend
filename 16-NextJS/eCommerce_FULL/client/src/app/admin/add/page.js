'use client';

import { useActionState } from 'react';
import { addProduct } from '@/app/actions/products';

export async function deleteProduct(id) {
  await fetch(`apiEndpiont/${id}`, {
    method: 'DELETE',
  });
}

export default function AddProduct() {
  const [actionState, formAction, isPending] = useActionState(addProduct, {
    error: null,
    success: false,
  });

  return (
    <>
      <h2 className='page-title'>Add Product</h2>

      <form action={formAction} className='form'>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input id='title' name='title' placeholder='Product title' />
        </div>

        <div className='form-group'>
          <label htmlFor='price'>Price</label>
          <input
            id='price'
            name='price'
            type='number'
            step='0.01'
            placeholder='0.00'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='category'>Category</label>
          <select id='category' name='category'>
            <option value=''>Select a category</option>
            <option value='electronics'>Electronics</option>
            <option value='jewelery'>Jewelery</option>
            <option value="men's clothing">Mens clothing</option>
            <option value="women's clothing">Womens clothing</option>
          </select>
        </div>

        {actionState.error && <p className='form-error'>{actionState.error}</p>}

        {actionState.success && (
          <p className='form-success'>{actionState.message}</p>
        )}

        <button type='submit' className='btn btn-submit' disabled={isPending}>
          {isPending ? 'Adding...' : 'Add Product'}
        </button>
      </form>
    </>
  );
}
