import Div from '@material-ui/core/CardContent';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import SideNav from './components/SideNav';
import routes from "./route";

function App() {

  const [sideNavToggle, isSideNavOpen] = React.useState(false)

  function handleSideNavOpen() {
    isSideNavOpen(!sideNavToggle)
  }

  return (
    <>
      <Router>
        <Header handleSideNavOpen={handleSideNavOpen} />
        <SideNav open={sideNavToggle} handleSideNavOpen={handleSideNavOpen} />
        <Switch>
          {routes.map((route) => <Route path={route.path} exact={route.exact}>{route.component}</Route>)}
        </Switch>
      </Router>
    </>
  );
}

export default App;
