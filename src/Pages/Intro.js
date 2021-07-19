import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import MailPopover from '../Components/MailPopover'

const introStyle = makeStyles((theme) => {
    return {
        root: {
            overflow: 'none',
            height: '100vh'
        },
        section: {
            height: '100%',
            marginTop: theme.spacing(5),
            padding: theme.spacing(2)
        },
        hero: {
            display: 'flex',
            margin: 'auto',
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'row',
                width: '60vw'
            },
            [theme.breakpoints.up('lg')]: {
                width: '50vw'
            }

        },
        profile: {
            width: theme.spacing(20),
            height: theme.spacing(20)
        },
        profileContainer: {
            padding: theme.spacing(2),
            margin: 'auto'
        },
        container: {

            marginTop: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                width: '80vw'
            }
        },
        icons: {
            display: 'flex',
            flexDirection: 'row',
            padding: theme.spacing(2)

        },
        iconItem: {
            width: '4rem'
        },
        github: {
            fontSize: '2rem',
            cursor: 'pointer'
        },
        linkedin: {
            fontSize: '2rem',
            color: '#0077af',
            cursor: 'pointer'
        },
        title: {
            fontSize: theme.typography.h4.fontSize,
            [theme.breakpoints.up('md')]: {
                fontSize: theme.typography.h2.fontSize
            }
        },

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

    const contactIcons = [
        {
            id: 1,
            icon: <FaGithub className={classes.github} onClick={() => window.open('https://github.com/PrunesLand')} />,

        },
        {
            id: 2,
            icon: <FaLinkedin className={classes.linkedin} onClick={() => window.open('https://www.linkedin.com/in/pranaya-anargya-22b585195/')} />,

        },
        {
            id: 3,
            icon: <MailPopover />,

        },

    ]

    return (
        <div
            className={classes.root}
        >
            <section
                className={classes.section}
            >
                <Paper
                    className={classes.hero}
                >
                    <div
                        className={classes.profileContainer}
                    >
                        <Profile />
                    </div>
                    <div
                        className={classes.container}
                    >

                        <Typography className={classes.title} >React Developer</Typography>
                        <Typography variant='h6'>Hi, I'm Pranaya.</Typography>
                        <Typography variant='subtitle2'>I'm a enthusiastic developer with an interest in ReactJS. </Typography>
                        <Typography>I'm experienced in various programming languages and tools used in React Development.</Typography>
                        <div className={classes.icons}>
                            {contactIcons.map(item => (
                                <div
                                    key={item.id}
                                    className={classes.iconItem}
                                >
                                    {item.icon}
                                </div>
                            ))}
                        </div>

                    </div>
                </Paper>
            </section>
        </div>
    )
}
