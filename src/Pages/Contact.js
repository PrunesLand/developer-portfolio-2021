import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";

const contactPage = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
            height: '100vh'
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        },
        title: {
            fontSize: theme.typography.h5.fontSize,
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.h4.fontSize
            }
        },
        paper: {
            padding: theme.spacing(2.5),
            margin: 'auto',
            [theme.breakpoints.up('sm')]: {
                width: '50vw'
            }
        },
        paperWrapper: {
            padding: theme.spacing(1)
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
                <div
                    className={classes.paperWrapper}
                >
                    <Paper
                        className={classes.paper}
                    >
                        <Typography>I'm an active Github user. View more of my works at <a href="https://github.com/PrunesLand/developer-portfolio-2021">Github</a> </Typography>
                    </Paper>
                </div>
                <div
                    className={classes.paperWrapper}
                >
                    <Paper
                        className={classes.paper}
                    >
                        <Typography>
                            View my professional profile at my <a href='https://www.linkedin.com/in/pranaya-anargya-22b585195/'>LinkedIn</a>. Connect with me and let's have a chat.
                        </Typography>
                    </Paper>
                </div>
                <div
                    className={classes.paperWrapper}
                >
                    <Paper
                        className={classes.paper}
                    >
                        <Typography>To have a direct conversation with me, just shoot me a mail at <u>pranarg.business@gmail.com</u> and talk about programming. I'm always keen on learning new things!</Typography>
                    </Paper>
                </div>
            </section>
        </div>
    )
}

export default Contact
