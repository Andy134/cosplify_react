import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import routes from "./route";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          {routes.map((route) => <Route path={route.path} exact={route.exact}>{route.component}</Route>)}
        </Switch>
      </Router>
    </>
  );
}

export default App;
