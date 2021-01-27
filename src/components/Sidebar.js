import { Card, CardContent, Paper, Tab, Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

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
            color: '#40a9ff'
        },
        '&$selected': {
            color: '#1890ff',
            fontWeight: 700
        },
        '&:focus': {
            color: '#40a9ff',
        }
    }
}))((props) => <Tab disableRipple {...props} />);

function Navbar(props) {
    var { title } = props
    return (
        <Paper>
            <AntTabs
                variant="fullWidth"
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <AntTab label="Top Day" aria-label="phone" selected={true} />
                <AntTab label="Top Month" aria-label="favorite" />
                <AntTab label="Top Year" aria-label="person" />
            </AntTabs>
            <Card>
                <CardContent>
                    <div>
                        Content
                    </div>
                </CardContent>
            </Card>
        </Paper>
    )
}

export default Navbar