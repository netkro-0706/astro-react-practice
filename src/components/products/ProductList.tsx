import React, { useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';
import ProductCard from './ProductCard';
import { productBox } from './ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  useEffect(() => {
    if (!loading) console.log('products', products);
  }, [loading]);

  return (
    <div className={productBox}>
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            images={product.images}
            price={product.price}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
