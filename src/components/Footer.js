import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import './style/Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <Box className="footer-content">
        <Box className="footer-section company-info">
          <Typography variant="h6" className="footer-title">COMPANY</Typography>
          <Link href="#" className="footer-link">About Houzz</Link>
          <Link href="#" className="footer-link">In the News</Link>
          <Link href="#" className="footer-link">Press Info</Link>
          <Link href="#" className="footer-link">Careers</Link>
          <Link href="#" className="footer-link">Contact Us</Link>
          <Link href="#" className="footer-link">Terms & Privacy</Link>
          <Link href="#" className="footer-link">Copyright & Trademark</Link>
        </Box>

        <Box className="footer-section explore-houzz">
          <Typography variant="h6" className="footer-title">EXPLORE HOUZZ</Typography>
          <Link href="#" className="footer-link">Buttons & Badges</Link>
          <Link href="#" className="footer-link">Mobile Apps</Link>
          <Link href="#" className="footer-link">For Brands</Link>
          <Link href="#" className="footer-link">For Professionals</Link>
          <Link href="#" className="footer-link">Review Professionals</Link>
          <Link href="#" className="footer-link">Suggested Professionals</Link>
        </Box>

        <Box className="footer-section connect-with-us">
          <Typography variant="h6" className="footer-title">CONNECT WITH US</Typography>
          <Link href="#" className="footer-link">Twitter</Link>
          <Link href="#" className="footer-link">Facebook</Link>
          <Link href="#" className="footer-link">RSS</Link>
        </Box>
      </Box>
      
      <Box className="footer-bottom">
        <Typography variant="body2" className="footer-text">© 2024 Houzz Inc.</Typography>
        <Typography variant="body2" className="footer-text">Select country: India</Typography>
      </Box>
    </footer>
  );
};

export default Footer;
