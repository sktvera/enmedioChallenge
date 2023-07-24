import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RtComicsPage from './Routes/RtComicsPage/RtComicsPage';
import RtSeriesPage from './Routes/RtSeriesPage/RtSeriesPage';
import RtHome from './Routes/RtHome/RtHome';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import './App.css';

function App() {
  return (
    <div className='main'>
      <Router>
        <Header />
        <div className="page-container"> {/* Agregamos la clase "page-container" */}
          <Switch>
            <Route path='/' exact component={RtHome} />
            <Route path='/comics' component={RtComicsPage} />
            <Route path='/series' component={RtSeriesPage} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
