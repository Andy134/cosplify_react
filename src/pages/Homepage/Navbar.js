import { Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    nav: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    typo: {
        padding: "1rem",
        cursor: "pointer"
    },
    pullRight: {
        marginLeft: 'auto'
    }
}));

function Navbar(props) {

    const classes = useStyles();
    const history = useHistory();

    var {title} = props

    function goTo() {
        history.push(props.url)
    }

    return (
        <Grid item xs={12}>
            <Paper className={classes.nav}>
                <Typography
                    // indicatorColor="primary"
                    // textColor="primary"
                    aria-label="disabled tabs example"
                    className={classes.typo}
                    variant="h6"
                    onClick={goTo}
                >
                    {title}
                        </Typography>

                <IconButton color="text-secondary" className={classes.pullRight} onClick={goTo}>
                    <KeyboardArrowRight fontSize="large" />
                </IconButton>
            </Paper>
        </Grid>
    )
}

export default Navbar