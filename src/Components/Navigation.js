import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { navStyle } from '../Styles/PageStyles'

export default function Navigation() {

    const classes = navStyle() // to use the styles of makestyle() from material-ui

    return (
        <>
            <AppBar
                position='static'
            >
                <Toolbar>

                    <Typography
                        className={classes.title}
                        color='secondary'
                        variant='h4'
                    >
                        Pranaya Anargya
                    </Typography>

                </Toolbar>
            </AppBar>
        </>
    )
}
