import { Button, Table } from '@heroui/react';
import React from 'react';

const ProductTable = ({productData}) => {

  return (
    <div>
       <Table>
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
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
              <Button variant='outline'>Edit</Button>
              <Button variant='danger-soft'>delete</Button>
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