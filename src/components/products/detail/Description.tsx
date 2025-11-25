import { textType } from '../../../styles/text.css';
import CartButton from '../atom/CartButton';
import { PriceCart } from './Detail.css';

interface Props {
  id: string;
  title: string;
  price: number;
  description: string;
}

const Description = ({ id, title, price, description }: Props) => {
  return (
    <div>
      <p className={textType({ type: 'title' })}>{title}</p>
      <div className={PriceCart}>
        <span className={textType({ type: 'price' })}>$ {price}</span>
        <CartButton productId={id} />
      </div>
      <p className={textType({ type: 'description' })}>{description}</p>
    </div>
  );
};

export default Description;
