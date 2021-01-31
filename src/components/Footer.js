import { Card, CardContent, Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
    footer: {
        marginTop: '1rem'
    }
})

export default function Footer() {

    const classes = useStyles();

    return (
        <Container className={classes.footer}>
            <Card>
                <CardContent>
                    <Grid container spacing={1} direction="column">
                        <Grid item xs>
                            <Typography >Snowyapp</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    )
}