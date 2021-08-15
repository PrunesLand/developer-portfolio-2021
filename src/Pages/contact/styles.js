import { makeStyles } from "@material-ui/core"

export const contactPage = makeStyles((theme) => {
    return {
        root: {
            flexGrow: 1,
            height: '90vh',
            [theme.breakpoints.up('md')]: {
                height: '120vh'
            }
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        },
        title: {
            fontSize: theme.typography.h5.fontSize,
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.h4.fontSize
            }
        },
        paper: {
            padding: theme.spacing(2.5),
            margin: 'auto',
            [theme.breakpoints.up('sm')]: {
                width: '50vw'
            },
            width: '50vw',
            background: theme.palette.primary.main

        },
        paperWrapper: {
            padding: theme.spacing(1)
        },
        image: {
            display: 'none',
            padding: theme.spacing(2),
            margin: 'auto',
            [theme.breakpoints.up('md')]: {
                width: theme.spacing(45),
                display: 'block'
            }

        }
    }
})