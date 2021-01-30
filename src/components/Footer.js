import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Container } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    footer: {
        bottom: '0px'
    }
})

export default function Footer() {

    const classes = useStyles();

    return (
        <Container disableGutters className={classes.footer}>
            <Card>
                <CardContent>
                    Snowyapp.
                </CardContent>
            </Card>
        </Container>
    )
}