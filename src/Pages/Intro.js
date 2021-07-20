import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import MailPopover from '../Components/MailPopover'

const introStyle = makeStyles((theme) => {
    return {
        root: {
            overflow: 'none',
            height: '100vh',
            [theme.breakpoints.up('sm')]: {
                height: '70vh'
            }
        },
        section: {
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
            },

        },
        profile: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none'
        },
        profileContainer: {
            padding: theme.spacing(2),
            margin: 'auto',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none'
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
        paperIcons: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            padding: theme.spacing(1),
            background: theme.palette.primary.light,
            '&:hover': {
                background: theme.palette.primary.main
            }
        },
        react: {
            textDecoration: 'none',
            color: "#000",
            'a:visited': {
                color: '#000'
            },
            '&:hover': {
                color: '#61dafb'
            }
        }

    }
})



export default function Intro() {

    const classes = introStyle()

    const preventTheft = () => (
        document.addEventListener('contextmenu', event => event.preventDefault())
    )

    const Profile = () => {

        return (

            <Avatar
                alt='Pranaya Anargya'
                src="/profile_photo.jpg"
                className={classes.profile}
                onClick={preventTheft()}

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

                        <Typography className={classes.title} > <a className={classes.react} href='https://reactjs.org/'>React</a> Developer</Typography>
                        <Typography variant='h6'>Hi, I'm Pranaya.</Typography>
                        <Typography variant='subtitle1'>I'm a enthusiastic developer with an interest in <a className={classes.react} href='https://reactjs.org/'>ReactJS</a>. </Typography>
                        <Typography variant='subtitle1'>I'm experienced in various programming techniques and tools used in <a className={classes.react} href='https://reactjs.org/'>React</a> Development.</Typography>
                        <div className={classes.icons}>
                            {contactIcons.map(item => (
                                <div
                                    key={item.id}
                                    className={classes.iconItem}
                                >
                                    <Paper
                                        className={classes.paperIcons}
                                    >
                                        {item.icon}
                                    </Paper>
                                </div>
                            ))}
                        </div>

                    </div>
                </Paper>
            </section>
        </div >
    )
}
