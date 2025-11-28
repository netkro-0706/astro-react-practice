'use client';

import { ProductTitleBox, Title } from './ProductTitle.css';

const ProductTitle = () => {
  return (
    <div className={ProductTitleBox}>
      <h1 className={Title}>Product List</h1>
    </div>
  );
};

export default ProductTitle;
