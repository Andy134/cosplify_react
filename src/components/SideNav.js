import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, ExitToApp, Favorite } from '@material-ui/icons';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    list: {
        width: 240,
    },
    fullList: {
        width: 'auto',
    },
});

const menus = [
    { title: "Cosplay", url: "/category/cosplay", icon: <InboxIcon /> },
    { title: "Beauty", url: "/category/beauty", icon: <MailIcon /> },
    { title: "Uniform", url: "/category/uniform", icon: <MailIcon /> },
    { title: "Most View", url: "/most_view", icon: <MailIcon /> },
    { title: "Popular", url: "/popular/", icon: <MailIcon /> }
]

const myInformation = [
    { title: "Account", url: "/account", icon: <AccountCircle color="textSecondary" /> },
    { title: "Favorite", url: "/favorite", icon: <Favorite color="textSecondary" /> },
    { title: "Logout", url: "/logout", icon: <ExitToApp color="textSecondary" /> }
]

export default function SideNav(props) {

    const history = useHistory();

    const classes = useStyles();

    function handleLink(url) {
        props.handleSideNavOpen()
        history.push(url)
    }

    return (
        <Drawer anchor={'left'} open={props.open} onClose={props.handleSideNavOpen}>
            <div className={classes.list}>
                <List>
                    {
                        menus.map((menu, index) => {
                            let active = (menu.url === history.location.pathname)
                            return (
                                <a className={`navLink${(active) ? ' active' : ''}`} onClick={() => handleLink(menu.url)}>
                                    <ListItem key={index} button to={menu.url} >
                                        <ListItemText primary={menu.title} />
                                    </ListItem>
                                </a>)
                        })
                    }
                </List>
                <Divider />
                <List>
                    {myInformation.map((menu, index) => (
                        <ListItem key={index} button>
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText className="navLink" primary={menu.title} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer >
    )
}