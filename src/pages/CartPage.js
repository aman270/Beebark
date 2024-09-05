// src/pages/CartPage.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const CartPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Cart</Typography>
      <Typography variant="body1">
        Your cart is currently empty. Start shopping to add items to your cart.
      </Typography>
    </Container>
  );
};

export default CartPage;
