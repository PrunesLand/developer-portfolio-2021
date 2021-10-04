import { makeStyles } from "@material-ui/core"

export const styles = makeStyles((theme) => {
    return {
        root: {
            height: '170vh',
            [theme.breakpoints.up('sm')]: {
                height: '80vh'
            },
            fontFamily: theme.typography.fontFamily
        },
        container: {


            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'row'
            },
        },
        title: {
            fontSize: theme.typography.h3.fontSize,
            padding: theme.spacing(2),
            fontFamily: theme.typography.fontFamily,
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.h4.fontSize
            },
            textAlign: 'center'

        }
    }
})