import ProductTable from '@/components/ProductTable';
import { getAllProducts } from '@/lib/product/data';
import React from 'react';

const ProductPage =async () => {
  const productData = await getAllProducts()
  return (
    <div>
      <h2>Product Page</h2>
      <ProductTable productData={productData}/>
    </div>
  );
};

export default ProductPage;