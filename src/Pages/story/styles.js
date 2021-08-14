import { makeStyles } from "@material-ui/core"

export const storyStyles = makeStyles((theme) => {
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
            fontSize: theme.typography.h4.fontSize,
            margin: 'auto',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.h3.fontSize,
            }
        },
        content: {
            fontSize: theme.typography.body1.fontSize,
            padding: theme.spacing(1),

        },
        paper: {
            padding: theme.spacing(1),
            background: theme.palette.primary.main
        }
    }
})