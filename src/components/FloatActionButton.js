import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';

const useStyles = makeStyles({
    fab: {
        position: "fixed",
        bottom: "3rem",
        right: "1rem",
        color: "white",
        backgroundColor: "black",
        "&:hover":{
            backgroundColor: "orangeRed"
        }
    },
    hidden: {
        display: 'none'
    }
})

export default function FloatActionButton() {

    const classes = useStyles();

    const [showFAB, setShowFAB] = React.useState(false)

    window.onscroll = function () { scrollFunction() };
    return (
        <Fab aria-label="add" onClick={topFunction}
            className={classes[showFAB ? 'fab' : 'hidden']} size="medium" id="myBtn" >
            <UpIcon />
        </Fab>
    )

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setShowFAB(true);
        } else {
            setShowFAB(false);
        }
    }

    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}

