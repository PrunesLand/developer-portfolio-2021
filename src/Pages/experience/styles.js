import { makeStyles } from "@material-ui/core"

export const expStyles = makeStyles((theme) => {
    return {
        root: {
            flex: 1
        },
        container: {
            display: 'grid',
            gridTemplateColumns: 'auto auto',
            margin: 'auto',
            padding: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                gridTemplateColumns: 'auto auto auto',
                width: '60vh'
            },
            gridGap: theme.spacing(2)
        },
        paper: {
            width: theme.spacing(10),
            height: theme.spacing(10),
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            background: theme.palette.primary.light,
            [theme.breakpoints.up('sm')]: {
                '&:hover': {
                    background: theme.palette.primary.dark,
                },
            }



        },
        icon: {
            fontSize: theme.spacing(5),

        },
        section: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        },
        titleContainer: {

            padding: theme.spacing(2)
        },
        title: {
            fontSize: theme.typography.h4.fontSize,
            display: 'flex',
            justifyContent: 'center',
            padding: theme.spacing(2)
        },
        popover: {
            pointerEvents: 'none',
        },
        eduWrapper: {
            display: 'flex',
            flexDirection: 'row',
            margin: theme.spacing(2),
            padding: theme.spacing(3),
            background: theme.palette.primary.main,
            [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
            },

        },
        eduIcon: {
            width: theme.spacing(15),
            height: theme.spacing(15),
            margin: 'auto',
            padding: theme.spacing(1)
        },
        education: {
            margin: 'auto',
            padding: theme.spacing(3)
        },
        eduTitle: {
            textAlign: 'center',
            fontSize: theme.typography.h4.fontSize,
            padding: theme.spacing(3)
        },
        uni: {
            fontSize: theme.typography.h5.fontSize,
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(3)
            }
        },
        degree: {
            fontSize: theme.typography.h6.fontSize,
            [theme.breakpoints.down('sm')]: {
                fontSize: theme.spacing(2)
            }
        },
        date: {
            fontSize: theme.typography.body2.fontSize
        },
        details: {
            fontSize: theme.spacing(1.8),
            padding: theme.spacing(1)
        },
        links: {
            color: '#000',
            'a:visited': {
                color: '#000'
            },
        }

    }
})