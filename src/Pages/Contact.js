import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";

const contactPage = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
            height: '90vh',
            [theme.breakpoints.up('md')]: {
                height: '120vh'
            }
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
            },
            background: theme.palette.primary.main

        },
        paperWrapper: {
            padding: theme.spacing(1)
        },
        image: {
            display: 'none',
            padding: theme.spacing(2),
            margin: 'auto',
            [theme.breakpoints.up('md')]: {
                width: theme.spacing(45),
                display: 'block'
            }

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
                        <Typography>I'm an active Github user. View more of my works at <a href="https://github.com/PrunesLand">Github</a>.</Typography>
                        <img src="/github_ss.png" alt="Github Profile" className={classes.image} />
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
                        <img src="/linkedin_ss.png" alt="Github Profile" className={classes.image} />
                    </Paper>
                </div>
                <div
                    className={classes.paperWrapper}
                >
                    <Paper
                        className={classes.paper}
                    >
                        <Typography>To have a direct conversation with me, just shoot me a mail at <u>pranarg.business@gmail.com</u> and let's talk about programming. I'm always keen on learning new things!</Typography>
                    </Paper>
                </div>
            </section>
        </div>
    )
}

export default Contact
