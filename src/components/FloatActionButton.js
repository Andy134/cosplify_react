import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';

const useStyles = makeStyles({
    fab: {
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        color: "white",
        backgroundColor: "orangeRed",
    }
})

export default function FloatActionButton() {

    const classes = useStyles();

    return (
        <Fab aria-label="add" className={classes.fab} size="medium">
            <UpIcon />
        </Fab>
    )
}