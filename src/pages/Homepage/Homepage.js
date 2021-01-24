import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Navbar from './Navbar';
import ImgMediaCards from "./ImgMediaCards";

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '8px'
    }
}));

function Homepage() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={2}>
                <Navbar title="Recently" url="/category/recently"/>
                <ImgMediaCards/>
                <Navbar title="Popular" url="/category/popular"/>
            </Grid>
        </Container>
    )
}

export default Homepage;