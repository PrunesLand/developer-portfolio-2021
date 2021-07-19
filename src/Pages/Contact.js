import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";

const contactPage = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1
        },
        container: {
            width: '90vw',
            margin: 'auto'
        },
        title: {
            fontSize: theme.typography.h5.fontSize,
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.h4.fontSize
            }
        },
        paper: {
            padding: theme.spacing(1.5),
            margin: theme.spacing(0.5)
        }
    }
})

const Contact = () => {

    const classes = contactPage()

    return (
        <div
            className={classes.root}
        >
            <section
                className={classes.container}
            >
                <Typography className={classes.title}>How you can reach me...</Typography>
                <Paper
                    className={classes.paper}
                >
                    <Typography>I'm an active Github user. View more of my works at <a href="https://github.com/PrunesLand/developer-portfolio-2021">Github</a> </Typography>
                </Paper>
                <Paper
                    className={classes.paper}
                >
                    <Typography>
                        View my professional profile at my <a href='https://www.linkedin.com/in/pranaya-anargya-22b585195/'>LinkedIn</a>. Connect with me and let's have a chat.
                    </Typography>
                </Paper>
                <Paper
                    className={classes.paper}
                >
                    <Typography>To have a direct conversation with me, just shoot me a mail at pranarg.business@gmail.com and talk about programming. I'm always keen on learning new things!</Typography>
                </Paper>
            </section>
        </div>
    )
}

export default Contact
