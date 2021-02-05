import { Card, CardContent, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { lstPostDefault } from "./../data";
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import { Number } from "./../common";

const useStyles = makeStyles(() => ({
    sectionContent: {
        paddingBottom: '0.75rem !important'
    },
    card: {
        // marginTop: '1rem',
        // margin: 'auto',
        borderRadius: '0px !important'
    },
    cardContent: {
        // padding: '0px !important'
    },
    image: {
        maxWidth: '75px',
        maxHeight: '75px',
    },
    img: {
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: '4px'
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
        fontWeight: 'bold'
    }
}))((props) => <Tab disableRipple {...props} />);

function Navbar() {
    const classes = useStyles();
    return (
        <Card elevation={1}>
            <CardContent className={classes.sectionContent}>
                <AntTabs
                    variant="fullWidth"
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <AntTab label="Top Day" aria-label="top day" className="navLink" />
                    <AntTab label="Top Month" aria-label="top month" className="navLink" />
                    <AntTab label="Top Year" aria-label="top year" className="navLink" />
                </AntTabs>
                <br />
                <Grid container spacing={1}>
                    <SidebarTopGrid />
                </Grid>
            </CardContent>
        </Card>
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
        <Card className={classes.card} elevation={0} >
            <CardContent className={classes.cardContent}>
                <Link className="link" to={"/demo"}>
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
                </Link>
            </CardContent>
        </Card >
    );
}