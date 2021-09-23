import { makeStyles } from "@material-ui/core"

export const styles = makeStyles((theme) => {
    return {
        root: {
            height: '145vh',
            [theme.breakpoints.up('sm')]: {
                height: '70vh'
            },
            fontFamily: theme.typography.fontFamily
        },
        container: {

            padding: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            [theme.breakpoints.up('sm')]: {
                flexDirection: 'row'
            },
        },
        title: {
            fontSize: theme.typography.h5.fontSize,
            padding: theme.spacing(2),
            fontFamily: theme.typography.fontFamily,
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.typography.h4.fontSize
            }

        }
    }
})