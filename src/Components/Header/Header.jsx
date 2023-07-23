import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './Assets/styles.css';

function Header() {
  return (
    <div className='header' >
      <AppBar position="static" className="appBar">
        <Toolbar>
          <p to="/" className="title">
            <Typography variant="h6">
              Marvel Comics App
            </Typography>
          </p>
          <p to="/comics" className="navButton">
            <Button color="inherit">
              Comics
            </Button>
          </p>
          <p to="/series" className="navButton">
            <Button color="inherit">
              Series
            </Button>
          </p>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
