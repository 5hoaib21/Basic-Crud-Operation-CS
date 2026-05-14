import { getAllProducts } from '@/lib/product/data';
import React from 'react';
import { ProductCard } from './ProductCard';

const PopularProduct = async () => {

  const productData = await getAllProducts()
  // console.log(productData, 'product DAta');
  return (
    <div>
      <h2>Popular Product</h2>
      <div className='grid grid-cols-3 gap-3'>
        {
          productData.map(product => {
            return <ProductCard 
            key={product._id}
            product={product}

            />
           
          
          }) 
        }
      </div>
    </div>
  );
};

export default PopularProduct;