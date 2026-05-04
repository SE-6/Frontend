const Products = ({ products }) => {
  console.log(products);

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.title} - ${p.price}
        </li>
      ))}
    </ul>
  );
};

export default Products;
