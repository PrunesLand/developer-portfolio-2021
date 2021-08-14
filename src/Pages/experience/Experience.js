import { Avatar, Typography } from '@material-ui/core'
import React from 'react'
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiMaterialUi, SiNetlify } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'
import { DiGit } from 'react-icons/di'
import Paper from '@material-ui/core/Paper';
import { blue, cyan, orange, red, yellow } from '@material-ui/core/colors'
import { expStyles } from './styles'

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
                <div
                    className={classes.education}
                >
                    <Typography className={classes.eduTitle} >Educational Background </Typography>
                    <Paper
                        className={classes.eduWrapper}
                    >
                        <div>
                            <Avatar src="/mq_logo.png" className={classes.eduIcon} />
                        </div>
                        <div>
                            <Typography className={classes.uni}>Macquarie University</Typography>
                            <Typography className={classes.degree}>Bachelor of Information Technology with a major in Cybersecurity</Typography>
                            <Typography className={classes.date}>June 2019 - June 2021</Typography>
                            <ul>
                                <li>
                                    <Typography className={classes.details}>Admitted into a <a className={classes.links} href='https://www.mq.edu.au/study/why-study-here/employability/learning-for-life'>PACE Program</a> and undertook professional experience with trusted partner companies.</Typography>
                                </li>
                                <li>
                                    <Typography className={classes.details}>Undertook the <a className={classes.links} href='https://students.mq.edu.au/careers/get-ready/development-programs/professional-development-program'>Profesional Development Program</a>.</Typography>
                                </li>
                                <li>
                                    <Typography className={classes.details}>Participated in the <a className={classes.links} href='https://students.mq.edu.au/uni-life/leadership/global-leadership-program'>Global Leadership Program</a>.</Typography>
                                </li>
                                <li>
                                    <Typography className={classes.details}>Became a mentor in the <a className={classes.links} href='https://mq.au.peoplegrove.com/hub/macquarie/programs-v2/macquarie-mentoring-program/about'>Macquarie Mentors Program</a>.</Typography>
                                </li>
                            </ul>
                        </div>
                    </Paper>
                    <Paper
                        className={classes.eduWrapper}
                    >
                        <div>
                            <Avatar src="/mq_logo.png" className={classes.eduIcon} />
                        </div>
                        <div>
                            <Typography className={classes.uni}>Macquarie University</Typography>
                            <Typography className={classes.degree}>Diploma of Information Technology</Typography>
                            <Typography className={classes.date}>June 2018 - February 2019</Typography>
                        </div>
                    </Paper>
                </div>
            </section>
        </div>
    )
}

export default Experience
