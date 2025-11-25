'use client';

import { CardBox, Title } from './ProductCard.css';
import { clampText } from '../../styles/text.css';

interface Props {
  title: string;
  img: string;
  price: number;
  description: string;
  id: number;
}

const ProductCard = ({ title, img, price, description, id }: Props) => {
  const strId = String(id);
  return (
    <div className={CardBox}>
      <a href={`/products/${strId}`}>
        <p className={`${Title} ${clampText({ lines: 1 })}`}>{title}</p>
        <img src={img} width={320} height={240} loading="lazy" />
        <p>${price}</p>
        <p className={clampText({ lines: 4 })}>{description}</p>
      </a>
    </div>
  );
};

export default ProductCard;
