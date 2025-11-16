import React, { useEffect } from 'react';
import { useProducts } from '../../hooks/useProducts';

export default function ProductList() {
  const { products, loading, error } = useProducts();

  useEffect(() => {
    if (!loading) console.log('products', products);
  }, [loading]);

  return (
    <div className="">
      <span>product</span>
    </div>
  );
}
