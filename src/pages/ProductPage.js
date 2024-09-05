// src/pages/ProductPage.js
import React from 'react';
import ProductList from '../components/ProductList';

const products = [
  { id: 1, title: 'Modern Sofa', description: 'Comfortable and stylish sofa', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Dining Set', description: 'Elegant dining set for your home', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Vintage Lamp', description: 'Beautiful vintage lamp', image: 'https://via.placeholder.com/150' },
];

const ProductPage = () => {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ProductPage;
