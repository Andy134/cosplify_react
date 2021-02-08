import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav from './components/SideNav';
import FloatActionButton from './components/FloatActionButton';
import routes from "./route";
import ShareButtons from "./components/ShareButtons"

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '8px',
    minHeight: '600px'
  }
}));

function App() {
  const classes = useStyles();
  const [sideNavToggle, isSideNavOpen] = React.useState(false)

  function handleSideNavOpen() {
    isSideNavOpen(!sideNavToggle)
  }

  return (
    <>
    <Router>
      <Header handleSideNavOpen={handleSideNavOpen} />
      <SideNav open={sideNavToggle} handleSideNavOpen={handleSideNavOpen} />
      <Container maxWidth="lg" className={classes.root}>
        <Switch>
          {routes.map((route, index) => <Route key={index} path={route.path} exact={route.exact}>{route.component}</Route>)}
        </Switch>
        <ShareButtons/>
      </Container>
      <Footer />
    </Router>
    <FloatActionButton />
    </>
  );
}

export default App;
