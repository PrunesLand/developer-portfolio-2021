import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { style } from './styles';
import { buttonItems } from './pageLink';
import Showcase from '../Modal';
import SideDrawer from '../Drawer';
import { NavButtons } from '../ButtonGroup';

export default function Navigation({ children }) {
    const history = useHistory()
    const classes = style() // to use the styles of makestyle() from material-ui

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
                    <SideDrawer />
                </Toolbar>
            </AppBar>
            <div className={classes.page}>
                <div className={classes.toolBar}></div>
                {children}

            </div>
            <div className={classes.buttonWrapper}>
                <NavButtons />
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
