import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Navbar from './Navbar';
import ImgMediaGrid from "./ImgMediaGrid";
import Sidebar from "./../../components/Sidebar";

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
                <Grid item xs={12}>
                    <Navbar title="Recently" url="/category/recently" />
                </Grid>
                <Grid item xs={12}>
                    <ImgMediaGrid />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>

                <Grid item md={8} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Navbar title="Popular" url="/category/popular" />
                        </Grid>
                        <Grid item xs={12}>
                            <ImgMediaGrid viewStyle={1} />
                        </Grid>
                    </Grid>
                </Grid>

                {/* SIDE BAR */}
                <Grid item md={4} xs={12} >
                    <Sidebar/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Homepage;