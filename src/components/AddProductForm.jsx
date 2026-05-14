"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const AddProductForm = ({ addProduct }) => {
const router = useRouter()
  const handleSubmit =async (formData)=> {

   const data =  await addProduct(formData)
   if(data.insertedId){
    router.push('/products')
   }

  }
  return (
    <div className="flex w-full items-center justify-center ">
      <Form
        action={handleSubmit}
        className="flex w-96 flex-col gap-4 p-9 m-9 border rounded-3xl shadow"
      >
        <TextField name="title" type="text">
          <Label>Product Name</Label>
          <Input placeholder="Enter Your Product Name" />
        </TextField>
        <TextField name="description" type="text">
          <Label>Product Description</Label>
          <Input placeholder="Enter Your Product description" />
        </TextField>
        <TextField name="price" type="number">
          <Label>Product Price</Label>
          <Input placeholder="Enter Your Product price" />
        </TextField>
        <TextField name="stock" type="number">
          <Label>Available Stock</Label>
          <Input placeholder="Enter Your Product stock" />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Add Product
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProductForm;
