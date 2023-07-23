import React from 'react';

import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Assets/styles.css';

function Header() {
  return (
    <div className="header">
      <AppBar className="appBar">
        <Toolbar>
          <Link className="title" to="/">
            <Typography variant="h6">Marvel Comics App</Typography>
          </Link>
          <Link to="/comics" className="navButton">
            <Button color="inherit">Comics</Button>
          </Link>
          <Link to="/series" className="navButton">
            <Button color="inherit">Series</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
