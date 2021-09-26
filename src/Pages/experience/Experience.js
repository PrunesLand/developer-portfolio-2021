import { Avatar, Typography } from '@material-ui/core'
import React from 'react'
import Paper from '@material-ui/core/Paper';
import { expStyles } from './styles'
import { icons } from './icons'

const Experience = () => {

    const classes = expStyles()

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
                                    <Typography className={classes.details}>Admitted into a <a className={classes.links} target='_blank' rel="noreferrer" href='https://www.mq.edu.au/study/why-study-here/employability/learning-for-life'>PACE Program</a> and undertook professional experience with trusted partner companies.</Typography>
                                </li>
                                <li>
                                    <Typography className={classes.details}>Undertook the <a className={classes.links} target='_blank' rel="noreferrer" href='https://students.mq.edu.au/careers/get-ready/development-programs/professional-development-program'>Profesional Development Program</a>.</Typography>
                                </li>
                                <li>
                                    <Typography className={classes.details}>Participated in the <a rel="noreferrer" target='_blank' className={classes.links} href='https://students.mq.edu.au/uni-life/leadership/global-leadership-program'>Global Leadership Program</a>.</Typography>
                                </li>
                                <li>
                                    <Typography className={classes.details}>Became a mentor in the <a rel="noreferrer" target='_blank' className={classes.links} href='https://mq.au.peoplegrove.com/hub/macquarie/programs-v2/macquarie-mentoring-program/about'>Macquarie Mentors Program</a>.</Typography>
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
