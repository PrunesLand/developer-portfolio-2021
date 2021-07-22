import { makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const storyStyles = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1
        },
        container: {
            display: 'flex',
            margin: 'auto',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '90vw',
            [theme.breakpoints.up('sm')]: {
                width: '80vw'
            },
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3)

        },
        title: {
            padding: theme.spacing(2),
            fontSize: theme.typography.h3.fontSize,
            margin: 'auto'
        },
        content: {
            fontSize: theme.typography.body1.fontSize,
            padding: theme.spacing(1)
        },
        paper: {
            padding: theme.spacing(1),
            background: theme.palette.primary.main
        }
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
                <Paper
                    className={classes.paper}
                >
                    <Typography className={classes.title}>My Programming History</Typography>
                    <Typography
                        className={classes.content}
                    >My first experience in programming started when I took computer science in highschool. My first exposure to programming was when we were learning about the fundamentals of data strucutures and algorithms. The programming language that was used to teach this was Java and it was the first language I learned. I learned Java simply to pass my exams at first and in doing so found an enjoyment in programming. This was then when I realized I had an interest in programming. </Typography>
                    <Typography
                        className={classes.content}
                    >I eventually  pursued a career in Information Technology as it involved more programming than Computer Science and was later admitted to Macquarie University to pursue a bachelor of Information Technology. Through my journey in university, I discovered various programming languages and needed to learn them in order to pass my units. The languages that I learned in University were Python, SQL, more Java and many more. I later took a class in Web Technology which was what drove my interest in Web Development.</Typography>
                    <Typography
                        className={classes.content}
                    >Due to the limitations of time, the unit only briefly touched on programming concept enought to pass the class. But the brief exposure was enough to develop my interest in web development. Soon after I passed this unit, I continued to learn more about web development and later found myself becoming a self taught React-Developer now aiming to learn Full-Stack Development. </Typography>
                    <Typography
                        className={classes.content}
                    >What attracted me into becoming a web developer was the creative aspects that can be applied into coding. That coding is not just a way to solve a problem but also a means to express yourself. This way of coding is called generative art. </Typography>
                    <Typography
                        className={classes.content}
                    >If you'd like to learn more about generative art, check out this <a href="https://www.freecodecamp.org/news/an-introduction-to-generative-art-what-it-is-and-how-you-make-it-b0b363b50a70/">article</a> to find out more.</Typography>
                </Paper>
            </div>
        </div>
    )
}

export default Story
