import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import MailPopover from '../../Components/MailPopover'
import { introStyle } from './styles';

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

                        <Typography className={classes.title} > Web Developer</Typography>
                        <Typography
                            variant='h6'
                            className={classes.paragraph}
                        >Hi, I'm Pranaya.</Typography>
                        <Typography
                            variant='subtitle1'
                            className={classes.paragraph}
                        >I'm a enthusiastic developer with an interest in <a className={classes.react} href='https://www.javascript.com/'>Javascript</a>. </Typography>
                        <Typography
                            variant='subtitle1'
                            className={classes.paragraph}
                        >I'm experienced in various programming techniques and tools used in Web Development.</Typography>
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
