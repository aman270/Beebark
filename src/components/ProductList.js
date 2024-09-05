// src/components/ProductList.js
import React from 'react';
import { Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Our Products</Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard 
              title={product.title} 
              description={product.description} 
              image={product.image} 
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
