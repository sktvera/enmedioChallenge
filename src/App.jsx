import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ComicsPage from './ComicsPage';
import SeriesPage from './SeriesPage';
import './App.css'; // Importamos el archivo de estilos personalizado

function App() {
  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="container">
            <h1 className="navbar-brand">Marvel Comics App</h1>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/comics" className="nav-link" onClick={handleRefreshPage}>
                  Comics
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/series" className="nav-link" onClick={handleRefreshPage}>
                  Series
                </Link>
              </li>
            </ul>
          </div>
        </nav>
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
