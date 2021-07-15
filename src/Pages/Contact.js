import { Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";

const contactPage = makeStyles({
    root: {
        flexGrow: 1
    },
    container: {
        width: '90vh',
        margin: 'auto'
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
                <Typography>How you can reach me...</Typography>
                <div>
                    <Typography>I'm an active Github user. View more of my works at <a href="https://github.com/PrunesLand/developer-portfolio-2021">Github</a> </Typography>
                </div>
                <div>
                    <Typography>
                        View my professional profile at my <a href='https://www.linkedin.com/in/pranaya-anargya-22b585195/'>LinkedIn</a>. Connect with me and let's have a chat.
                    </Typography>
                </div>
                <div>
                    <Typography>To have a direct conversation with me, just shoot me a mail at pranarg.business@gmail.com and talk about programming. I'm always keen on learning new things!</Typography>
                </div>
            </section>
        </div>
    )
}

export default Contact
