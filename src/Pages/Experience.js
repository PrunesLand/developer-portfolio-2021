import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiMaterialUi, SiNetlify } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { DiGit } from 'react-icons/di'
import Paper from '@material-ui/core/Paper';
import { blue, cyan, orange, red, yellow } from '@material-ui/core/colors'

const expStyles = makeStyles((theme) => {
    return {
        root: {
            flex: 1
        },
        container: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            margin: 'auto',
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                gridTemplateColumns: 'auto auto auto',
                width: '60vh'
            },
            gridGap: theme.spacing(2)
        },
        paper: {
            width: theme.spacing(10),
            height: theme.spacing(10),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            '&:hover': {
                background: theme.palette.primary.dark
            },
            cursor: 'pointer'

        },
        icon: {
            fontSize: theme.spacing(5),

        },
        section: {
            alignItems: 'center',
            [theme.breakpoints.up('sm')]: {

            }
        },
        titleContainer: {

            padding: theme.spacing(2)
        },
        title: {
            fontSize: theme.typography.h4.fontSize,
            display: 'flex',
            justifyContent: 'center',
            padding: theme.spacing(2)
        },
        popover: {
            pointerEvents: 'none',
        },

    }
})

const Experience = () => {

    const classes = expStyles()

    const icons = [
        {
            id: 1,
            icon: <SiJavascript className={classes.icon} color={yellow[500]} />,
            title: 'Javascript',
            category: 'Language'
        },
        {
            id: 2,
            icon: <SiHtml5 className={classes.icon} color={red[700]} />,
            title: 'HTML',
            category: 'Language'
        },
        {
            id: 3,
            icon: <SiCss3 className={classes.icon} color={blue[500]} />,
            title: 'CSS',
            category: 'Language'
        },
        {
            id: 4,
            icon: <DiGit className={classes.icon} color={orange[900]} />,
            title: 'Git version control',
            category: 'Version control'
        },
        {
            id: 5,
            icon: <SiReact className={classes.icon} color={blue[300]} />,
            title: 'React',
            category: 'Library'

        },
        {
            id: 6,
            icon: <SiMaterialUi className={classes.icon} color={blue[900]} />,
            title: 'Material UI',
            category: 'Framework'
        },
        {
            id: 7,
            icon: <SiNetlify className={classes.icon} color={cyan[500]} />,
            title: 'Netlify',
            category: 'Deployment'
        },
        {
            id: 8,
            icon: <GrMysql className={classes.icon} color={blue[900]} />,
            title: 'SQL',
            category: 'Language'
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
                    className={classes.titleContainer}
                >
                    <Typography className={classes.title}>My Experiences...</Typography>
                </div>
                <div
                    className={classes.container}
                >
                    {icons.map(item => (
                        <div
                            key={item.id}
                        >
                            <Paper
                                className={classes.paper}
                            >
                                {item.icon}
                            </Paper>

                        </div>
                    ))
                    }

                </div>
                <div>
                    <Typography variant='h4'>Educational Background </Typography>
                    <div>
                        <div>

                        </div>
                        <div>
                            <Typography variant='h5'>Macquarie University</Typography>
                            <Typography variant='h6'>Bachelor of Information Technology with a major in Cybersecurity</Typography>
                            <Typography variant='body2'>June 2019 - June 2021</Typography>
                        </div>
                    </div>
                    <div>
                        <div>

                        </div>
                        <div>
                            <Typography variant='h5'>Macquarie University</Typography>
                            <Typography variant='h6'>Diploma of Information Technology</Typography>
                            <Typography variant='body2'>June 2018 - February 2019</Typography>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience
