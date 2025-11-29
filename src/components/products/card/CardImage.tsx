'use client';

import { useState } from 'react';
import NumbersBox from './NumbersBox';
import { cardImage } from './CardImage.css';

interface Props {
  images: string[];
}

const CardImage = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <img src={images[selectedImage]} className={cardImage} loading="lazy" />
      <NumbersBox imagesOfNumber={images.length} setNumber={setSelectedImage} />
    </div>
  );
};

export default CardImage;
