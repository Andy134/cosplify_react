import { Container } from '@material-ui/core';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import FloatActionButton from './components/FloatActionButton';
import Footer from './components/Footer';
import Header from './components/Header';
import SideNav from './components/SideNav';
import routes from "./route";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '8px',
    minHeight: '600px'
  }
}));

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  }
});

function App() {
  const classes = useStyles();
  const [sideNavToggle, isSideNavOpen] = React.useState(false)

  function handleSideNavOpen() {
    isSideNavOpen(!sideNavToggle)
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Header handleSideNavOpen={handleSideNavOpen} />
          <SideNav open={sideNavToggle} handleSideNavOpen={handleSideNavOpen} />
          <Container maxWidth="lg" className={classes.root}>
            <Switch>
              {routes.map((route, index) => <Route key={index} path={route.path} exact={route.exact}>{route.component}</Route>)}
            </Switch>
            {/* <ShareButtons/> */}
          </Container>
          <Footer />
        </Router>
        <FloatActionButton />
      </ThemeProvider>
    </>
  );
}

export default App;
