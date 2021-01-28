import { Card, CardContent, Grid, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
}));

const AntTabs = withStyles({
    root: {
        borderBottom: '1px solid #e8e8e8',
    },
    indicator: {
        backgroundColor: '#1890ff',
    },
})(Tabs)

const AntTab = withStyles(() => ({
    root: {
        textTransform: 'none',
        minWidth: '30%',
        '&:hover': {
            color: '#40a9ff',
            borderBottom: '1.5px solid #e8e8e8'
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: 700
        },
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
                </CardContent>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography>content</Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Paper>
    )
}

export default Navbar