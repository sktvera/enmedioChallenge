import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ComicsPage from './ComicsPage';
import SeriesPage from './SeriesPage';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/comics">Comics</Link>
            </li>
            <li>
              <Link to="/series">Series</Link>
            </li>
          </ul>
        </nav>
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
    </Router>
  );
}

export default App;
