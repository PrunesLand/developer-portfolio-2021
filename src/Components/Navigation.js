import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";

const navStyle = makeStyles((theme) => {
    return {
        root: {

        },
        title: {
            flexGrow: 1,
            textAlign: 'center',
            color: theme.palette.primary.main

        },
        container: {

        },
        appbar: {
            alignItems: 'center',
            color: theme.palette.primary.dark
        }
    }
})

export default function Navigation() {

    const classes = navStyle() // to use the styles of makestyle() from material-ui

    return (
        <>
            <AppBar
                position='static'
                className={classes.appbar}
            >
                <Toolbar>

                    <Typography
                        className={classes.title}
                        variant='h4'
                    >
                        Pranaya Anargya
                    </Typography>

                </Toolbar>
            </AppBar>
        </>
    )
}
