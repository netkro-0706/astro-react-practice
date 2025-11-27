'use client';

import { useState } from 'react';
import NumbersBox from './NumbersBox';

interface Props {
  images: string[];
}

const CardImage = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div>
      <img
        src={images[selectedImage]}
        width={320}
        height={240}
        loading="lazy"
      />
      <NumbersBox imagesOfNumber={images.length} setNumber={setSelectedImage} />
    </div>
  );
};

export default CardImage;
