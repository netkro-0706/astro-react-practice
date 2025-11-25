import { useStore } from '@nanostores/react';
import { addToCart, cartItems, subFromCart } from '../../../stores/cartCount';
import { addCart, subCart, cartCount } from './CartButton.css';

interface Props {
  productId: string;
}

const CartButton = ({ productId }: Props) => {
  const items = useStore(cartItems);
  const count = items[productId];

  return (
    <div>
      <span className={cartCount}>{count || 0}</span>
      <button className={addCart} onClick={() => addToCart(productId)}>
        +
      </button>
      <button className={subCart} onClick={() => subFromCart(productId)}>
        -
      </button>
    </div>
  );
};

export default CartButton;
