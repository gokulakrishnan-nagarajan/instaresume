import { useEffect, useState } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import BuildPage from './components/BuildPage/BuildPage';
import PrintPage from './components/PrintPage/PrintPage';

import './assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './App.scss';

function App() {
  return (
    <div className="container flex-column">
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <BuildPage></BuildPage>
          </Route>
          <Route exact path="/print">
            <PrintPage></PrintPage>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
