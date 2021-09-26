import { makeStyles } from "@material-ui/core"

export const styles = makeStyles((theme) => {
    return {
        root: {
            padding: theme.spacing(1),
            fontFamily: theme.typography.fontFamily
        },
        container: {
            height: '80vw',
            width: '40vh',
            minWidth: theme.spacing(40),
            minHeight: theme.spacing(40),
            maxHeight: theme.spacing(40),

        },
        title: {

        },
        description: {

        },
        content: {
            background: theme.palette.primary.main,
            height: "100%",
            '&:hover': {
                background: theme.palette.primary.dark
            }
        }
    }
})