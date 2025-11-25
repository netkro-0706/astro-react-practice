import { useStore } from '@nanostores/react';
import { addToCart, cartOfCount, subToCart } from '../../../stores/cartCount';
import { addCart, subCart, cartCount } from './Detail.css';

const CartButton = () => {
  const count = useStore(cartOfCount);
  return (
    <div>
      <span className={cartCount}>{count}</span>
      <button className={addCart} onClick={() => addToCart()}>
        +
      </button>
      <button className={subCart} onClick={() => subToCart()}>
        -
      </button>
    </div>
  );
};

export default CartButton;
