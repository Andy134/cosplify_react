import { Card, CardContent, CardHeader, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
    nav: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingTop: '0px',
        paddingBottom: '0px !important'
    },
    typo: {
        marginTop: ".5rem",
        cursor: "pointer"
    },
    pullRight: {
        marginLeft: 'auto'
    }
}));

function Navbar(props) {

    const classes = useStyles();
    const history = useHistory();

    var { title } = props

    function goTo() {
        history.push(props.url)
    }

    return (
        <Card>
            <CardContent  className={classes.nav}>
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

                <IconButton color="default" className={classes.pullRight} onClick={goTo}>
                    <KeyboardArrowRight fontSize="medium" />
                </IconButton>
            </CardContent>
        </Card>
    )
}

export default Navbar