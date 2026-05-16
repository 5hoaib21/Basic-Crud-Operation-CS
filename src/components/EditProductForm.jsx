"use client";

import { updateProduct } from "@/lib/product/action";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const EditProductForm = ({ product }) => {
  const { _id, title, description, price, stock } = product;
  const router = useRouter();

  const handleSubmit = async (formData) => {
    const data = await updateProduct(_id, formData);
    console.log(data, "data from cs");
    if (data.modifiedCount > 0) {
      router.push("/products");
    }
  };
  return (
    <div className="flex w-full items-center justify-center ">
      <Form
        action={handleSubmit}
        className="flex w-96 flex-col gap-4 p-9 m-9 border rounded-3xl shadow"
      >
        <TextField name="title" type="text" defaultValue={title}>
          <Label>Product Name</Label>
          <Input placeholder="Enter Your Product Name" />
        </TextField>
        <TextField defaultValue={description} name="description" type="text">
          <Label>Product Description</Label>
          <Input placeholder="Enter Your Product description" />
        </TextField>
        <TextField defaultValue={price} name="price" type="number">
          <Label>Product Price</Label>
          <Input placeholder="Enter Your Product price" />
        </TextField>
        <TextField defaultValue={stock} name="stock" type="number">
          <Label>Available Stock</Label>
          <Input placeholder="Enter Your Product stock" />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Update Product info
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditProductForm;
