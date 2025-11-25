'use client';

import useSWR from 'swr';
import { useEffect } from 'react';
import { api } from '../../lib/axios';
import type { Product } from '../../types/product';
import ImageList from './detail/imageList';
import Description from './detail/description';
import {
  productContainer,
  imageSection,
  descriptionSection,
} from './ProductDetail.css';

interface Props {
  id: string;
}

const fetcher = (url: string) => api.get<Product>(url).then((res) => res.data);
const ProductDetail = ({ id }: Props) => {
  const { data, error, isLoading } = useSWR(`/products/${id}`, fetcher);

  useEffect(() => {
    console.log('data', data);
  }, [isLoading]);

  if (!data) return null;

  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className={productContainer}>
      <div className={imageSection}>
        <ImageList images={data.images} />
      </div>
      <div className={descriptionSection}>
        <Description
          title={data.title}
          price={data.price}
          description={data.description}
        />
      </div>
    </div>
  );
};

export default ProductDetail;
