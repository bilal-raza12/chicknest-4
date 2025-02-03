import { defineField } from "sanity";

export const  product =  defineField({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
      {
        name: 'slug',
        title: 'Slug',
        type: 'string',
        description: 'A unique identifier for the product (usually part of the URL)',
       
        
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        description: 'The name of the product',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'The price of the product in your selected currency',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        description: 'The image representing the product',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'text',
        description: 'A brief description of the product',
      },
      {
        name: 'rating',
        title: 'Rating',
        type: 'number',
        description: 'The rating of the product, typically between 1 and 5',
        
      },
      {
        name: 'discount',
        title: 'Discount',
        type: 'number',
        description: 'The discount percentage, if any',
       
     // optional field, not required
      },
      {
        name: 'originalPrice',
        title: 'Original Price',
        type: 'number',
        description: 'The original price of the product before any discounts',
     
      },
    ],
  });
  