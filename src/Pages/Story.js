import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const storyStyles = makeStyles({
    root: {
        flexGrow: 1
    },
    container: {
        display: 'flex',
        margin: 'auto',
        justifyContent: 'center',
        width: '90vh',
        flexDirection: 'column'

    }
})

const Story = () => {

    const classes = storyStyles()

    return (
        <div
            className={classes.root}
        >
            <div
                className={classes.container}
            >
                <Typography variant='h3'>My programming history</Typography>
                <Typography>My first experience in programming started when I took computer science in highschool. My first exposure to programming was when we were learning about the fundamentals of data strucutures and algorithms. The programming language that was used to teach this was Java and it was the first language I learned. I learned Java simply to pass my exams at first and in doing so found an enjoyment in programming. This was then when I realized I had an interest in programming. </Typography>
                <Typography>I eventually  pursued a career in Information Technology as it involved more programming than Computer Science and was later admitted to Macquarie University to pursue a bachelor of Information Technology. Through my journey in university, I discovered various programming languages and needed to learn them in order to pass my units. The languages that I learned in University were Python, SQL, more Java and many more. I later took a class in Web Technology which was what drove my interest in Web Development.</Typography>
                <Typography>Due to the limitations of time, the unit only briefly touched on programming concept enought to pass the class. But the brief exposure was enough to develop my interest in web development. Soon after I passed this unit, I continued to learn more about web development and later found myself becoming a self taught React-Developer now aiming to learn Full-Stack Development. </Typography>
                <Typography>What attracted me into becoming a web developer was the creative aspects that can be applied into coding. That coding is not just a way to solve a problem but also a means to express yourself. In a sense, it's a unique art form expressed through 1's and 0's which can be taught not only as a problem solving mechanism, but as a form of expression of oneself.</Typography>
                <Typography>If you'd like to learn more about coding as an art, check out this article to find out more.</Typography>
            </div>
        </div>
    )
}

export default Story