import React from 'react';
import { TextField, Button, Container, Box, Card, CardContent, Typography } from '@mui/material';
import ScrollableCards from './ScrollableCards'; // Import ScrollableCards component
import './style/Home.css'; // Import the CSS file
import LatestStories from './LatestStories'; // Import LatestStories component
import Footer from './Footer';
import './style/Footer.css'; // Import the CSS file

const Home = () => {
  return (
    <>
      <div className="container">
        {/* Left Section */}
        <Box className="left-section">
          <Box className="hero-text">
            <h1>The Best Place to Find Professionals</h1>
            <p>Discover and connect with experts for all your home design needs.</p>
            <Container className="signup-container">
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                className="email-input"
              />
              <Button variant="contained" color="primary" className="signup-button">
                Sign Up
              </Button>
            </Container>
          </Box>
        </Box>

        {/* Right Section */}
        <Box className="right-section">
          <Box className="form-container">
            <h2>Join Millions of Home Professionals</h2>
            <p>Get the all-in-one tool for marketing, CRM, and project management</p>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              className="email-input"
            />
            <Button variant="contained" color="primary" className="join-button">
              Join Free
            </Button>
            <p className="disclaimer">
              By signing up, signing in, or continuing, I agree to the Terms of Use and acknowledge the Privacy Policy.
            </p>
          </Box>
        </Box>
      </div>

      {/* Centered Statement */}
      <div className="houzz-statement">
        <h2>Here’s what you can do on Houzz</h2>
      </div>

      {/* Cards Section */}
      <div className="cards-section">
        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="div">
              Discover Design Ideas
            </Typography>
            <Typography variant="body2">
              Explore the best home designs and inspiration from professionals.
            </Typography>
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="div">
              Browse Pros
            </Typography>
            <Typography variant="body2">
              Find and connect with top home professionals for your projects.
            </Typography>
          </CardContent>
        </Card>

        <Card className="card">
          <CardContent>
            <Typography variant="h5" component="div">
              Suggest Pros for Me
            </Typography>
            <Typography variant="body2">
              Let us suggest the best professionals based on your needs.
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* Scrollable Cards Section */}
      <ScrollableCards />  {/* Ensure this is added */}

       {/* Latest Stories Section */}
       <div className="latest-stories-section">
        <LatestStories />  {/* Ensure this is added */}
      </div>
      <Footer />
    </>
    
  );
};

export default Home;
