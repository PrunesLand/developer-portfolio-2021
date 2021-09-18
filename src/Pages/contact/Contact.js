import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import { contactPage } from './styles'

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
                    <Typography>I'm an active Github user. View more of my works at <a href="https://github.com/PrunesLand">Github</a>.</Typography>
                    <img src="/github_ss.png" alt="Github Profile" className={classes.image} />
                </Paper>

                <Paper
                    className={classes.paper}
                >
                    <Typography>
                        View my professional profile at my <a href='https://www.linkedin.com/in/pranaya-anargya-22b585195/'>LinkedIn</a>. Connect with me and let's have a chat.
                    </Typography>
                    <img src="/linkedin_ss.png" alt="Github Profile" className={classes.image} />
                </Paper>

                <Paper
                    className={classes.paper}
                >
                    <Typography>To have a direct conversation with me, just shoot me a mail at <u>pranarg.business@gmail.com</u> and let's talk about programming. I'm always keen on learning new things!</Typography>
                </Paper>

            </section>
        </div>
    )
}

export default Contact
