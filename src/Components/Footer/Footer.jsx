import React from 'react';
import { Typography, Link } from '@mui/material';

const footerStyle = {
  backgroundColor: '#202020', /* Color de fondo del footer */
  color: '#ffffff', /* Color del texto del footer */
  padding: '16px', /* Espaciado interno del footer */
  textAlign: 'center',
  position: 'fixed', /* Fijar el footer en la parte inferior de la pantalla */
  bottom: 0,
  left: 0,
  width: '100%',
};

const linkStyle = {
  color: '#ffffff', /* Color del texto del enlace */
  textDecoration: 'none',
};

const linkHoverStyle = {
  '&:hover': {
    textDecoration: 'underline', /* Subrayar el enlace al pasar el cursor sobre él */
  },
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <Typography variant="body2">
        Challenge enmedio  <Link href="https://www.example.com" target="_blank" style={{ ...linkStyle, ...linkHoverStyle }}></Link>
      </Typography>
    </footer>
  );
}

export default Footer;
