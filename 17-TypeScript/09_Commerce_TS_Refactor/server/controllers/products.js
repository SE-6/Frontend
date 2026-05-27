import { products } from '../data/products.js';

export const getProducts = (req, res) => {
  res.status(200).json(products);
};

export const getProduct = (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === Number(id));
  if (!product)
    return res
      .status(404)
      .json({ message: `Product with id:${id} was not found comning` });

  res.status(200).json(product);
};

export const createProduct = (req, res) => {
  const newProduct = req.body;

  res.status(201).json({
    message: 'Product created',
    product: newProduct,
  });
};

export const updateProduct = (req, res) => {
  const { id } = req.params;

  res.status(200).json({
    message: 'Product updated',
    product: { id: Number(id), ...req.body },
  });
};

export const deleteProduct = (req, res) => {
  const { id } = req.params;
  res.status(418).json({ message: 'Product deleted', id: Number(id) });
};
