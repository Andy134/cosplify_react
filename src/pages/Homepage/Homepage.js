import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Sidebar from "./../../components/Sidebar";
import ImgMediaGrid from "./ImgMediaGrid";
import Navbar from './Navbar';

const useStyles = makeStyles(() => ({
    root: {
        marginTop: '8px'
    }
}));

function Homepage() {
    const classes = useStyles();
    return (
        <>
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

                <Grid item sm={8} xs={12}>
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
                <Grid item sm={4} xs={12} >
                    <Sidebar />
                </Grid>
            </Grid>
        </>
    )
}

export default Homepage;