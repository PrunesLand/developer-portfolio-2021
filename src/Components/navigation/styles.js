import { makeStyles } from "@material-ui/core";

export const style = makeStyles((theme) => {
    return {
        root: {
            flex: 1,

        },
        title: {
            flexGrow: 1,
            textAlign: 'center',
            color: theme.palette.text.secondary,
            fontSize: theme.typography.h6.fontSize,
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.h4.fontSize
            },
            marginLeft: theme.spacing(4),
        },
        appbar: {
            background: theme.palette.primary.main
        },
        infoIcon: {
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: theme.palette.text.secondary,
            '&:hover': {
                color: theme.palette.text.primary
            }
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

        },
        paper: {
            backgroundColor: theme.palette.primary.main,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            fontFamily: theme.typography.fontFamily
        },
        page: {
            height: '100%'
        },
        toolBar: theme.mixins.toolbar,
        buttonWrapper: {
            flexGrow: 1,
            padding: theme.spacing(4),
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },
            [theme.breakpoints.up('sm')]: {
                display: 'block'
            },

        },
        rootButton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        iconContainer: {
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block'
            }
        },
        drawer: {
            display: 'block',
            [theme.breakpoints.up('sm')]: {
                display: 'none'
            },

        },
        menu: {
            fontSize: '2rem',
            cursor: 'pointer',
            color: theme.palette.text.secondary
        },
        footer: {
            background: theme.palette.primary.main,
            height: '30vh',

        },
        fContainer: {
            display: 'flex',
            flexDirection: 'row',

        },
        listDiv: {
            width: '50%',
            textAlign: 'left',

        },
        listItem: {
            listStyle: 'none',
            cursor: 'pointer'
        },
        listText: {
            fontSize: theme.spacing(1.5),
            textAlign: 'left',
            color: theme.palette.text.secondary,
            '&:hover': {
                color: theme.palette.text.primary
            },
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(2.5)
            }
        },
        fContact: {
            width: '50%',
            textAlign: 'right',
            padding: theme.spacing(2),
        },
        github: {
            fontSize: theme.spacing(3),
            cursor: 'pointer',
            padding: '0.5vh 2vh',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(4)
            }
        },
        linkedin: {
            fontSize: theme.spacing(3),
            color: '#0077af',
            cursor: 'pointer',
            padding: '0.5vh 2vh',
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(4)
            }
        },
        contactText: {
            fontSize: theme.spacing(1.5),
            color: theme.palette.text.secondary,
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(2.5)
            }
        },
        copyright: {
            fontSize: theme.spacing(1.8),
            textAlign: 'center',
            color: theme.palette.text.secondary,

            [theme.breakpoints.down('sm')]: {
                paddingTop: '8vh',
            }
        },
        buttonText: {
            color: theme.palette.text.secondary
        }

    }
})