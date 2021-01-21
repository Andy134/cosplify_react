import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import routes from "./route";
import SideNav from './components/SideNav';
import Div from '@material-ui/core/CardContent';

function App() {

  const [sideNavToggle, isSideNavOpen] = React.useState(false)

  function handleSideNavOpen() {
    isSideNavOpen(!sideNavToggle)
  }

  return (
    <>
      <Router>
        <Header handleSideNavOpen={handleSideNavOpen}/>
        <SideNav open={sideNavToggle} handleSideNavOpen={handleSideNavOpen}/>
        <Div style={{height:"40px"}}/>
        <Switch>
          {routes.map((route) => <Route path={route.path} exact={route.exact}>{route.component}</Route>)}
        </Switch>
      </Router>
    </>
  );
}

export default App;
