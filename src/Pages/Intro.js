import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'

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
            margin: 'auto',
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'row',
                width: '60vw'
            },
            [theme.breakpoints.up('lg')]: {
                width: '40vw'
            }

        },
        profile: {
            width: theme.spacing(20),
            height: theme.spacing(20)
        },
        profileContainer: {

            margin: 'auto'
        },
        container: {
            marginLeft: theme.spacing(3),
            padding: theme.spacing(1),
            [theme.breakpoints.up('sm')]: {
                width: '60vh'
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
            fontSize: '2rem'
        },
        linkedin: {
            fontSize: '2rem'
        },
        mail: {
            fontSize: '2.2rem'
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
            icon: <FaGithub className={classes.github} />,

        },
        {
            id: 2,
            icon: <FaLinkedin className={classes.linkedin} />,

        },
        {
            id: 3,
            icon: <GoMail className={classes.mail} />,

        },

    ]

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
                        className={classes.profileContainer}
                    >
                        <Profile />
                    </div>
                    <div
                        className={classes.container}
                    >
                        <Typography variant='h4'>React Developer</Typography>
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
                </div>
            </section>
        </div>
    )
}
