import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import React, { useEffect } from 'react';

const useStyles = makeStyles({
    list: {
        width: 240,
    },
    fullList: {
        width: 'auto',
    },
});

const menus = [
    { title: "Cosplay", url: "/category/cosplay" },
    { title: "Beauty", url: "/category/beauty" },
    { title: "Most View", url: "/most_view" },
    { title: "Popular", url: "/popular/" }
]

export default function SideNav(props) {

    const classes = useStyles();

    return (
        <Drawer anchor={'left'} open={props.open} onClose={props.handleSideNavOpen}>
            <div className={classes.list}>
                <List>
                    {menus.map((menu, index) => (
                        <ListItem key={index} button>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={menu.text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem key={index} button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    )

    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });
    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //         return;
    //     }

    //     setState({ ...state, [anchor]: open });
    // };

    // const list = (anchor) => (
    //     <div
    //         className={clsx(classes.list, {
    //             [classes.fullList]: anchor === 'top' || anchor === 'bottom',
    //         })}
    //         role="presentation"
    //         onClick={toggleDrawer(anchor, false)}
    //         onKeyDown={toggleDrawer(anchor, false)}
    //     >
    //         <List>
    //             {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //                 <ListItem button key={text}>
    //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //                     <ListItemText primary={text} />
    //                 </ListItem>
    //             ))}
    //         </List>
    //         <Divider />
    //         <List>
    //             {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //                 <ListItem button key={text}>
    //                     <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
    //                     <ListItemText primary={text} />
    //                 </ListItem>
    //             ))}
    //         </List>
    //     </div>
    // );

    // return (
    //     <div>
    //         {['left', 'right', 'top', 'bottom'].map((anchor) => (
    //             <React.Fragment key={anchor}>
    //                 <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
    //                 <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
    //                     {list(anchor)}
    //                 </Drawer>
    //             </React.Fragment>
    //         ))}
    //     </div>
    // );
}