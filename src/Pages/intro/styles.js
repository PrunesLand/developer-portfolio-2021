import { makeStyles } from "@material-ui/core"

export const introStyle = makeStyles((theme) => {
    return {
        root: {
            overflow: 'none',
            height: '110vh',
            [theme.breakpoints.up('sm')]: {
                height: '70vh'
            },
        },
        section: {
            marginTop: theme.spacing(5),
            padding: theme.spacing(2)
        },
        hero: {
            display: 'flex',
            margin: 'auto',
            padding: theme.spacing(2),
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column',
            },
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'row',
                width: '60vw'
            },
            [theme.breakpoints.up('lg')]: {
                width: '50vw'
            },
            background: theme.palette.primary.main
        },
        profile: {
            width: theme.spacing(20),
            height: theme.spacing(20),
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none'
        },
        profileContainer: {
            padding: theme.spacing(2),
            margin: 'auto',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            userSelect: 'none'
        },
        container: {

            marginTop: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                width: '80vw'
            }
        },
        iconItem: {
            width: '4rem'
        },
        github: {
            fontSize: '2rem',
            cursor: 'pointer'
        },
        linkedin: {
            fontSize: '2rem',
            color: '#0077af',
            cursor: 'pointer'
        },
        title: {
            fontSize: theme.typography.h4.fontSize,
            [theme.breakpoints.up('md')]: {
                fontSize: theme.typography.h2.fontSize
            },
        },
        paperIcons: {
            width: theme.spacing(4),
            height: theme.spacing(4),
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            padding: theme.spacing(1),
            background: theme.palette.primary.light,
            '&:hover': {
                background: theme.palette.primary.dark
            }
        },
        react: {
            textDecoration: 'none',
            color: "#000",
            'a:visited': {
                color: '#000'
            },
            '&:hover': {
                color: '#fcdc00'
            }
        },
        paragraph: {
            paddingTop: theme.spacing(0.5),
            paddingLeft: theme.spacing(2)
        }

    }
})