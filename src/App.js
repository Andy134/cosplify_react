import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav from './components/SideNav';
import routes from "./route";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '8px',
    minHeight: '570px'
  }
}));

function App() {
  const classes = useStyles();
  const [sideNavToggle, isSideNavOpen] = React.useState(false)

  function handleSideNavOpen() {
    isSideNavOpen(!sideNavToggle)
  }

  return (
    <Router>
      <Header handleSideNavOpen={handleSideNavOpen} />
      <SideNav open={sideNavToggle} handleSideNavOpen={handleSideNavOpen} />
      <Container maxWidth="lg" className={classes.root}>
        <Switch>
          {routes.map((route, index) => <Route key={index} path={route.path} exact={route.exact}>{route.component}</Route>)}
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
