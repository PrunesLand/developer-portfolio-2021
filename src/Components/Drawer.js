import React from 'react'
import { style } from './navigation/styles'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BiMenu } from 'react-icons/bi'
import { useHistory } from 'react-router-dom';
import { buttonItems } from './navigation/pageLink';

export const SideDrawer = () => {
    const history = useHistory()
    const classes = style()

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div

        >
            <List>
                {buttonItems.map((item) => (
                    <ListItem button key={item.id}>
                        <ListItemText primary={item.text} onClick={() => {
                            history.push(item.path)
                            toggleDrawer(anchor, false)
                            window.scrollTo(0, 0)
                        }} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div
            className={classes.drawer}
        >
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <BiMenu onClick={toggleDrawer(anchor, true)} className={classes.menu} />
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}

export default SideDrawer
