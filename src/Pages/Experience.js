import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiMaterialUi, SiNetlify } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { DiGit } from 'react-icons/di'
import Paper from '@material-ui/core/Paper';

const expStyles = makeStyles((theme) => {
    return {
        root: {
            flex: 1
        },
        container: {
            display: 'grid',
            gridTemplateColumns: 'auto auto auto',
            width: '90vh',
            margin: 'auto'
        },
        paper: {
            width: '2rem',
            height: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
        },
        icon: {
            fontSize: '1.8rem'
        }

    }
})

const Experience = () => {

    const classes = expStyles()

    const icons = [
        {
            id: 1,
            icon: <SiJavascript className={classes.icon} />,
            title: 'Javascript',
            category: 'Language'
        },
        {
            id: 2,
            icon: <SiHtml5 className={classes.icon} />,
            title: 'HTML',
            category: 'Language'
        },
        {
            id: 3,
            icon: <SiCss3 className={classes.icon} />,
            title: 'CSS',
            category: 'Language'
        },
        {
            id: 4,
            icon: <DiGit className={classes.icon} />,
            title: 'Git version control',
            category: 'Version control'
        },
        {
            id: 5,
            icon: <SiReact className={classes.icon} />,
            title: 'React',
            category: 'Library'

        },
        {
            id: 6,
            icon: <SiMaterialUi className={classes.icon} />,
            title: 'Material UI',
            category: 'Framework'
        },
        {
            id: 7,
            icon: <SiNetlify className={classes.icon} />,
            title: 'Netlify',
            category: 'Deployment'
        },
        {
            id: 8,
            icon: <GrMysql className={classes.icon} />,
            title: 'SQL',
            category: 'Language'
        },

    ]

    return (
        <div
            className={classes.root}
        >
            <section>
                <div>
                    <Typography variant="h3">What i'm experienced in....</Typography>
                </div>
                <div
                    className={classes.container}
                >
                    {icons.map(item => (
                        <Paper
                            key={item.key}
                            className={classes.paper}
                        >
                            {item.icon}
                        </Paper>
                    ))
                    }
                </div>
            </section>
        </div>
    )
}

export default Experience
