// src/pages/ProfilePage.js
import React from 'react';
import { Typography, Container } from '@mui/material';

const ProfilePage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Your Profile</Typography>
      <Typography variant="body1">
        Manage your account information and preferences here.
      </Typography>
    </Container>
  );
};

export default ProfilePage;
