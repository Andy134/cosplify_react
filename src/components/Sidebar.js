import { Card, CardContent, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { lstPostDefault } from "./../data";
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import { Number } from "./../common";

const useStyles = makeStyles(() => ({
    card: {
        marginTop: '1rem',
        margin: 'auto',
        borderRadius: '0px !important'
    },
    cardContent: {
        padding: '0px !important'
    },
    image: {
        maxWidth: '120px',
        maxHeight: '120px'
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
    title: {
        fontWeight: '700'
    }
}));

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    }
})(Tabs)

const AntTab = withStyles(() => ({
    root: {
        textTransform: 'none',
        minWidth: '30%',
        fontWeight: 'bold',
        '&:hover': {
            color: '#40a9ff',
        }
        ,
        '&:selected': {
            color: '#40a9ff',
        }
        ,
        '&:focus': {
            color: '#40a9ff'
        }
    }
}))((props) => <Tab disableRipple {...props} />);

function Navbar(props) {
    return (
        <Paper>
            <Card>
                <CardContent>
                    <AntTabs
                        variant="fullWidth"
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <AntTab label="Top Day" aria-label="phone" />
                        <AntTab label="Top Month" aria-label="favorite" />
                        <AntTab label="Top Year" aria-label="person" />
                    </AntTabs>
                    <Grid container>
                        <SidebarTopGrid />
                    </Grid>
                </CardContent>
            </Card>
        </Paper>
    )
}

export default Navbar

function SidebarTopGrid() {
    return (
        <>
            { lstPostDefault.map((post, index) => { return <SidebarTopPost key={index} post={post} /> })}
        </>
    )
}

function SidebarTopPost(props) {
    const classes = useStyles();
    var { post } = props
    return (
        // <div className={classes.root}>
        <Link className="link" to={"/demo"}>
            <Card className={classes.card} spacing={0} elevation={0} >
                <CardContent className={classes.cardContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={post.img} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8} container alignItems="center">
                            <Grid item>
                                <Typography variant="subtitle2" className={classes.title}>
                                    {post.title}
                                </Typography>
                                <Typography variant="caption">
                                    <Number number="120000" /> views
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Link>

        // </div>
    );
}