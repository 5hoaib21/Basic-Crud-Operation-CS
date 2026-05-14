import AddProductForm from '@/components/AddProductForm';
import { addProduct } from '@/lib/product/action';
import React from 'react';

const AddProductPage = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold'>Add Product page</h1>
      <AddProductForm addProduct={addProduct}/>
    </div>
  );
};

export default AddProductPage;