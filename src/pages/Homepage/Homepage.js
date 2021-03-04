import { Grid } from '@material-ui/core';
import React from 'react';
import Sidebar from "./../../components/Sidebar";
import ImgMediaGrid from "./ImgMediaGrid";
import Navbar from './Navbar';

function Homepage() {
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
            {/* <br />
            <br />
            <br /> */}

            <Grid container spacing={2}>
                <Grid item md={9} xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Navbar title="Cosplay" url="/category/cosplay" />
                        </Grid>
                        <Grid item xs={12}>
                            <ImgMediaGrid viewStyle={1} />
                        </Grid>
                    </Grid>

                    <br />
                    {/* <br />
                    <br />
                    <br /> */}

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Navbar title="Uniform" url="/category/uniform" />
                        </Grid>
                        <Grid item xs={12}>
                            <ImgMediaGrid viewStyle={1} />
                        </Grid>
                    </Grid>
                </Grid>

                {/* SIDE BAR */}
                <Grid item md={3} xs={12} >
                    <Sidebar />
                </Grid>
            </Grid>

            <br /><br />
            <br /><br />
        </>
    )
}

export default Homepage;