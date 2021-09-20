import { makeStyles } from "@material-ui/core"

export const styles = makeStyles((theme) => {
    return {
        root: {
            height: '140vh',
            [theme.breakpoints.up('sm')]: {
                height: '70vh'
            },
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
            padding: theme.spacing(3),
            // color: '#999'

        }
    }
})