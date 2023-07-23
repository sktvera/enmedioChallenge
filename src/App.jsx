import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ComicsPage from './ComicsPage';
import SeriesPage from './SeriesPage';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './App.css'; // Importamos el archivo de estilos personalizado

function App() {
  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <Router>
      <div className="app-container">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Marvel Comics App
            </Typography>
            <Button color="inherit" component={Link} to="/comics">
              Comics
            </Button>
            <Button color="inherit" component={Link} to="/series">
              Series
            </Button>
          </Toolbar>
        </AppBar>
        <div className="content">
          <Switch>
            <Route path="/comics">
              <ComicsPage />
            </Route>
            <Route path="/series">
              <SeriesPage />
            </Route>
            <Route path="/">
              <h1>Bienvenido a la Marvel Comics App</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
