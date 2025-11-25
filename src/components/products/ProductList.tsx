import React, { useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  useEffect(() => {
    if (!loading) console.log('products', products);
  }, [loading]);

  return (
    <div className="">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            img={product.images[0]}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
