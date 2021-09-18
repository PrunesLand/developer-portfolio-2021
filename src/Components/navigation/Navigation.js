import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { style } from './styles';
import Showcase from '../Modal';
import SideDrawer from '../Drawer';
import { NavButtons } from '../ButtonGroup';
import Footer from '../Footer';

export default function Navigation({ children }) {

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
            <Footer />
        </div>
    )
}
