import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";
import { BsInfoCircle } from 'react-icons/bs'
const navStyle = makeStyles((theme) => {
    return {
        root: {
            flex: 1
        },
        title: {
            flexGrow: 1,
            textAlign: 'center',
            color: theme.palette.secondary.main

        },
        appbar: {
            flexGrow: 1,
            background: theme.palette.primary.light
        },
        infoIcon: {
            fontSize: '1.5rem'
        }
    }
})

export default function Navigation() {

    const classes = navStyle() // to use the styles of makestyle() from material-ui

    const IconContainer = () => {
        return (
            <div>
                <BsInfoCircle className={classes.infoIcon} />
            </div>
        )
    }

    return (
        <div
            className={classes.root}
        >
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
                    <IconContainer />
                </Toolbar>
            </AppBar>
        </div>
    )
}
