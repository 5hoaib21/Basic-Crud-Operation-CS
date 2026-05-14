import { Button, Table } from '@heroui/react';
import React from 'react';
import { DeleteModal } from './DeleteModal';
import Link from 'next/link';

const ProductTable = ({productData}) => {

  return (
    <div>
       <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-150">
          <Table.Header>
            <Table.Column isRowHeader>Product Name</Table.Column>
            <Table.Column>Price</Table.Column>
            <Table.Column>Stock</Table.Column>
            <Table.Column>Action</Table.Column>
          </Table.Header>
          <Table.Body>
          {
            productData.map(product => {
              return   <Table.Row key={product._id}>
              <Table.Cell>{product.title}</Table.Cell>
              <Table.Cell>{product.price}</Table.Cell>
              <Table.Cell>{product.stock}</Table.Cell>
              <Table.Cell className={'flex gap-2'}>
            <Link href={`/products/${product._id}/edit`}>  <Button variant='outline'>Edit</Button></Link>
              <DeleteModal
              productId={product._id}
               />
              </Table.Cell>
            </Table.Row>
            })
          }
           
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
    </Table>
    </div>
  );
};

export default ProductTable;