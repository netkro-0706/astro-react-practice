import { useStore } from '@nanostores/react';
import { addToCart, cartItems } from '../../../stores/cartCount';
import {
  addCart,
  subCart,
  cartCount,
  countBox,
  cartBox,
  cartButtonBox,
} from './CartButton.css';
import { useEffect, useState } from 'react';
import { showModal } from '../../../stores/modal';

interface Props {
  productId: string;
}

const CartButton = ({ productId }: Props) => {
  const items = useStore(cartItems);
  const currentCount = items[productId] || 0;
  const [number, setNumber] = useState(currentCount);

  useEffect(() => {
    setNumber(currentCount);
  }, [currentCount]);

  const handleAddToCart = () => {
    addToCart(productId, number);
    showModal('Success add to Cart');
  };

  return (
    <div className={cartButtonBox}>
      <div className={countBox}>
        <span className={cartCount}>{number}</span>
        <button
          className={addCart}
          onClick={() => setNumber((prev) => (prev || 0) + 1)}
        >
          +
        </button>
        <button
          className={subCart}
          onClick={() => setNumber((prev) => Math.max(0, (prev || 0) - 1))}
        >
          -
        </button>
      </div>
      <button className={cartBox} onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default CartButton;
