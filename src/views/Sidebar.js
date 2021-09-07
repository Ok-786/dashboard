import { Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AccountCircle, Assistant, CardGiftcard, Group, Home, Report, Timeline } from '@material-ui/icons';
import scriptCSS from '../css/scriptCSS';
import { useHistory } from 'react-router-dom';

const Sidebar = (props) => {
    const classes = scriptCSS();
    const history = useHistory();
    // const 
    if (props.loggedin === "Admin") {
        return (
            <div className={classes.sidebar}>
                <div className={classes.sidebarWrapper}>
                    <div className={classes.sidebarMenu}>
                        <h3 className={classes.sidebarTitle}>
                            Dashboard
                        </h3>
                        <List className={classes.sidebarList}>
                            {['Home', 'Analytics'].map((text, index) => (
                                <ListItem button className={classes.sidebarListItem} key={text} onClick={() => history.push("/")}>
                                    <ListItemIcon >
                                        {index === 0 ? <Home className={classes.sidebarIcon} /> : <div></div>}
                                        {index === 1 ? <Timeline className={classes.sidebarIcon} /> : <div></div>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className={classes.sidebarMenu}>
                        <h3 className={classes.sidebarTitle}>
                            Admin Panel
                        </h3>
                        <List className={classes.sidebarList}>
                            {['Users', 'Admins', 'Products'].map((text, index) => (
                                <ListItem button className={classes.sidebarListItem} key={text}>
                                    <ListItemIcon >
                                        {index === 0 ? <Group className={classes.sidebarIcon} /> : <div></div>}
                                        {index === 1 ? <CardGiftcard className={classes.sidebarIcon} /> : <div></div>}
                                        {index === 2 ? <Assistant className={classes.sidebarIcon} /> : <div></div>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>

                    <div className={classes.sidebarMenu}>
                        <h3 className={classes.sidebarTitle}>
                            Quick panel
                        </h3>
                        <List className={classes.sidebarList}>
                            {['Reports'].map((text, index) => (
                                <ListItem button className={classes.sidebarListItem} key={text}>
                                    <ListItemIcon >
                                        {index === 0 ? <Report className={classes.sidebarIcon} /> : <div></div>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
                <Button variant="outlined" color="secondary" style={{ marginInline: '30%' }} onClick={() => history.push("/Signup")}>Logout</Button>
            </div>
        )
    } else{
        return (
            <div className={classes.sidebar}>
                <div className={classes.sidebarWrapper}>
                    <div className={classes.sidebarMenu}>
                        <h3 className={classes.sidebarTitle}>
                            Dashboard
                        </h3>
                        <List className={classes.sidebarList}>
                            {['Home'].map((text, index) => (
                                <ListItem button className={classes.sidebarListItem} key={text} onClick={() => history.push("/")}>
                                    <ListItemIcon >
                                        {index === 0 ? <Home className={classes.sidebarIcon}  /> : <div></div>}
                                        {index === 1 ? <Timeline className={classes.sidebarIcon} /> : <div></div>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className={classes.sidebarMenu}>
                        <h3 className={classes.sidebarTitle}>
                            User Panel
                        </h3>
                        <List className={classes.sidebarList}>
                            {['Profile', 'Products'].map((text, index) => (
                                <ListItem button className={classes.sidebarListItem} key={text}>
                                    <ListItemIcon >
                                        {index === 1 ? <Assistant className={classes.sidebarIcon} /> : <div></div>}
                                        {index === 0 ? <AccountCircle className={classes.sidebarIcon} /> : <div></div>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    <div className={classes.sidebarMenu}>
                        <h3 className={classes.sidebarTitle}>
                            Quick panel
                        </h3>
                        <List className={classes.sidebarList}>
                            {['Cart'].map((text, index) => (
                                <ListItem button className={classes.sidebarListItem} key={text}>
                                    <ListItemIcon >
                                        {index === 0 ? <Report className={classes.sidebarIcon} /> : <div></div>}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </div>
                <Button variant="outlined" color="secondary" style={{ marginInline: '30%' }} onClick={() => {history.push("/Signup"); localStorage.removeItem("Login User")}}>Logout</Button>
            </div>
        )
    }

}

export default Sidebar;
