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
            alignItems: 'center',
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
            margin: theme.spacing(2),

            [theme.breakpoints.down('sm')]: {
                width: '90vw',
                maxWidth: theme.spacing(30)

            },
            width: '90vh',
            maxWidth: theme.spacing(60),
            background: theme.palette.primary.main,

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