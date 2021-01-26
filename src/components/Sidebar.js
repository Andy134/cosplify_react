import { Paper, Typography } from '@material-ui/core';
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

    var { title } = props

    return (
        <Paper className={classes.nav}>
            <Typography
                // indicatorColor="primary"
                // textColor="primary"
                aria-label="disabled tabs example"
                className={classes.typo}
                variant="h6"
            >
                {title}
            </Typography>
        </Paper>
    )
}

export default Navbar