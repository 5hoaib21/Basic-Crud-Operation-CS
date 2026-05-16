import EditProductForm from '@/components/EditProductForm';
import { getProductById } from '@/lib/product/data';
import React from 'react';

const EditProductPage = async ({params}) => {
  const {id} = await params;
  const product = await getProductById(id)
  // console.log(product);
 
  return (
    <div>
<h1 className='font-bold text-3xl'>Edit {product.title}</h1>
<EditProductForm product={product} />
    </div>
  );
};

export default EditProductPage;