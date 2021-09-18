import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BiMenu } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { style } from './styles';
import { buttonItems } from './pageLink';
import Showcase from '../modal/Modal';

export default function Navigation({ children }) {
    const history = useHistory()
    const classes = style() // to use the styles of makestyle() from material-ui

    const TemporaryDrawer = () => {
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

    const BasicButtonGroup = () => {
        const history = useHistory()

        return (
            <div className={classes.rootButton}>
                <ButtonGroup variant="text" color='default' aria-label="text primary button group">
                    {buttonItems.map(item => (
                        <Button key={item.id} onClick={() => {
                            history.push(item.path)
                            window.scrollTo(0, 0)
                        }}>
                            {item.text}
                        </Button>
                    ))}
                </ButtonGroup>
            </div >
        );
    }

    return (
        <div
            className={classes.root}
        >
            <AppBar
                className={classes.appbar}
            >
                <Toolbar
                >
                    <Typography
                        className={classes.title}
                    >
                        Pranaya Anargya

                    </Typography>
                    <Showcase />
                    <TemporaryDrawer />
                </Toolbar>
            </AppBar>
            <div className={classes.page}>
                <div className={classes.toolBar}></div>
                {children}

            </div>
            <div className={classes.buttonWrapper}>
                <BasicButtonGroup />
            </div>
            <footer
                className={classes.footer}
            >
                <div
                    className={classes.fContainer}
                >
                    <div
                        className={classes.listDiv}
                    >
                        <ul>
                            {/* Displays all button group links with .map() and array accessed from /pageLinks.js */}
                            {buttonItems.map(item => {
                                return (
                                    <li
                                        className={classes.listItem}
                                    >
                                        <Typography
                                            className={classes.listText}
                                            onClick={() => {
                                                history.push(item.path)
                                                window.scrollTo(0, 0)
                                            }}
                                        >
                                            {item.text}
                                        </Typography>
                                    </li>
                                )
                            })}

                        </ul>
                    </div>
                    <div
                        className={classes.fContact}
                    >
                        <Typography
                            className={classes.contactText}
                        >
                            Contact me at:
                        </Typography>
                        <Typography
                            className={classes.contactText}
                        >
                            pranarg.business@gmail.com
                        </Typography>
                        <div>
                            <FaGithub className={classes.github} onClick={() => window.open('https://github.com/PrunesLand')} />
                            <FaLinkedin className={classes.linkedin} onClick={() => window.open('https://www.linkedin.com/in/pranaya-anargya-22b585195/')} />
                        </div>
                    </div>
                </div>
                <div>
                    <Typography
                        className={classes.copyright}
                    >
                        &copy; {new Date().getFullYear()} Prunesland
                    </Typography>
                </div>
            </footer>
        </div>
    )
}
