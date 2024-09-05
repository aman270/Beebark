import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"  // Change to fixed to keep it at the top
      style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        zIndex: 1000,  // Ensure it stays above other content
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'  // Optional: Add shadow for a nice effect
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          Beebark
        </Typography>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button style={{ color: '#000000' }} component={Link} to="/">Home</Button>
          <Button style={{ color: '#000000' }} component={Link} to="/product">Products</Button>
          <Button style={{ color: '#000000' }} component={Link} to="/inspiration">Inspiration</Button>
          <Button style={{ color: '#000000' }} component={Link} to="/cart">Cart</Button>
          <Button style={{ color: '#000000' }} component={Link} to="/profile">Profile</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
