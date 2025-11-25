'use client';

import { useStore } from '@nanostores/react';
import { cartItems } from '../../../stores/cartCount';
import CartItem from './CartItem';

const ProductCart = () => {
  const items = useStore(cartItems);

  return (
    <div>
      {Object.entries(items).map(([id]) => (
        <CartItem id={id} key={id} />
      ))}
    </div>
  );
};

export default ProductCart;
