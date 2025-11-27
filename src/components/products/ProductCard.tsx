'use client';

import { CardBox, Title } from './ProductCard.css';
import { clampText } from '../../styles/text.css';
import CardImage from './card/CardImage';

interface Props {
  title: string;
  images: string[];
  price: number;
  description: string;
  id: number;
}

const ProductCard = ({ title, images, price, description, id }: Props) => {
  const strId = String(id);
  return (
    <div className={CardBox}>
      <a href={`/products/${strId}`}>
        <p className={`${Title} ${clampText({ lines: 1 })}`}>{title}</p>
      </a>
      <CardImage images={images} />
      <p>${price}</p>
      <p className={clampText({ lines: 4 })}>{description}</p>
    </div>
  );
};

export default ProductCard;
