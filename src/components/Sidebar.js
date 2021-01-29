import { Card, CardContent, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { lstPostDefault } from "./../data";
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '1rem',
        margin: 'auto'
    },
    image: {
        width: 100,
        height: 100
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
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
    var { title } = props;
    const classes = useStyles();
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

function SidebarTopGrid(props) {
    return (
        <>
            { lstPostDefault.map((post, index) => { return <SidebarTopPost post={post} /> })}
        </>
    )
}

function SidebarTopPost(props) {
    const classes = useStyles();
    var { post } = props
    return (
        // <div className={classes.root}>
        <Paper className={classes.paper} spacing={1} elevation={0} >
            <Grid container spacing={1}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src={post.img} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography variant="subtitle1">
                                {post.title}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {post.secondary}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
        // </div>
    );
}