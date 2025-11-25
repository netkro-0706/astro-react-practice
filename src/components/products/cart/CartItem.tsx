import useSWR from 'swr';
import { api } from '../../../lib/axios';
import type { Product } from '../../../types/product';
import CartButton from '../atom/CartButton';
import { textType } from '../../../styles/text.css';
import { cartItemBlock } from './CartItem.css';

interface Props {
  id: string;
}

const fetcher = (url: string) => api.get<Product>(url).then((res) => res.data);
const CartItem = ({ id }: Props) => {
  const { data, error } = useSWR(`/products/${id}`, fetcher);

  if (!data) return;

  return (
    <div>
      <p className={textType({ type: 'title' })}>{data.title}</p>
      <div className={cartItemBlock}>
        <img src={data.images[0]} width={160} height={120} loading="lazy" />
        <CartButton productId={id} />
      </div>
      <hr />
    </div>
  );
};

export default CartItem;
