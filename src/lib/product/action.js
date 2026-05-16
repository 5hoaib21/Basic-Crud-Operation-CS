"use server";

import { revalidatePath } from "next/cache";

export const addProduct = async (formData) => {
  const newProduct = Object.fromEntries(formData.entries());

  const modifiedData = {
    title: newProduct.title,
    description: newProduct.description,
    price: parseFloat(newProduct.price),
    stock: parseInt(newProduct.stock),
  };
  const res = await fetch("http://localhost:8008/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });
  const data = await res.json();

  if (!res.ok) {
    return;
  } else {
    revalidatePath("/products");
  }
  return data;
};




export const deleteProduct =async (id) => {
  const res = await fetch(`http://localhost:8008/products/${id}`, {
    method: 'DELETE',
  })
  const data = await res.json();
  if(!res.ok) return;
 revalidatePath('/products')
  return data;
};


export const updateProduct = async (id, formData) => {
  // console.log(id, 'id from updatedProduct');
  const updatedProduct = Object.fromEntries(formData.entries())
  // console.log(updatedProduct,'updatedProduct' );
   const modifiedData = {
    title: updatedProduct.title,
    description: updatedProduct.description,
    price: parseFloat(updatedProduct.price),
    stock: parseInt(updatedProduct.stock),
  };
  const res = await fetch(`http://localhost:8008/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(modifiedData)

  })
  const data = await res.json()
  if(!res.ok) return;
  revalidatePath("/products")
  return data;
}
