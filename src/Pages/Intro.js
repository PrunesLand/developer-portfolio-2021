import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const introStyle = makeStyles((theme) => {
    return {
        root: {
            overflow: 'none',
        },
        section: {
            height: '100%',
            marginTop: theme.spacing(5),
        },
        hero: {
            display: 'flex',
            width: '80vh',
            margin: 'auto',

        },
        profile: {
            width: theme.spacing(15),
            height: theme.spacing(15)
        },
        container: {
            marginLeft: theme.spacing(3)
        }
    }
})

export default function Intro() {

    const classes = introStyle()

    const Profile = () => {
        return (

            <Avatar
                alt='Pranaya Anargya'
                src="/mario-av.png"
                className={classes.profile}
            />

        )
    }

    return (
        <div
            className={classes.root}
        >
            <section
                className={classes.section}
            >
                <div
                    className={classes.hero}
                >
                    <div
                        className={classes.profile}
                    >
                        <Profile />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <Typography variant='h3'>React Developer</Typography>
                        <Typography variant='h5'>Hi i'm Pranaya,</Typography>
                        <Typography variant='body1'>I'm a enthusiastic developer with an interest in ReactJS. </Typography>
                        <Typography>I'm experienced in various programming languages and tools used in React Development.</Typography>
                        <div>
                            <FaGithub />
                            <FaLinkedin />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
