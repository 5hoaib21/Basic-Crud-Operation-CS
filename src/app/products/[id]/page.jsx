import { getProductById } from "@/lib/product/data";
import { Card } from "@heroui/react";
import React from "react";

const ViewDetailPage = async ({ params }) => {
  const { id } = await params;

  // const res = await fetch(`http://localhost:8008/products/${id}`)
  // const data = await res.json();
  const data = await getProductById(id)
  // console.log(data); 
const {title, description, price, stock} = data;
  return <div className="container mx-auto mt-10 space-y-5">
  <h1>view detail page</h1>
  <Card>
    <h1>{title}</h1>
    <p>{description}</p>
    <h1>Price:- <strong>{price}</strong></h1>
    <h1>Stock:- <strong>{stock}</strong></h1>
    
  </Card>
  </div>;
};

export default ViewDetailPage;
