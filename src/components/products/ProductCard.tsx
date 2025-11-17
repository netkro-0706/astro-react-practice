'use client';

import { CardBox, Title, Description } from './ProductCard.css';

interface Props {
  title: string;
  img: string;
  price: number;
  description: string;
}

const ProductCard = ({ title, img, price, description }: Props) => {
  return (
    <div className={CardBox}>
      <p className={Title}>{title}</p>
      <img src={img} width={320} height={240} loading="lazy" />
      <p>${price}</p>
      <p className={Description}>{description}</p>
    </div>
  );
};

export default ProductCard;
