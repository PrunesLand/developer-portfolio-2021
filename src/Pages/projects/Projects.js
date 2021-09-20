import { Typography } from '@mui/material'
import React from 'react'
import ProjectCard from '../../Components/Card/Card'
import { projectList } from './projectList'
import { styles } from './styles'

const Projects = () => {

    const classes = styles()

    return (
        <div className={classes.root}>
            <Typography className={classes.title} variant='h4' align='center' >My Projects</Typography>
            <main className={classes.container}>
                {projectList.map(item => {
                    return (

                        <ProjectCard
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            link={item.link}
                            key={item.id}
                        />
                    )
                })}
            </main>
        </div>
    )
}

export default Projects
