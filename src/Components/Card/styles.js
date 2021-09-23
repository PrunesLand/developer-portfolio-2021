import { makeStyles } from "@material-ui/core"

export const styles = makeStyles((theme) => {
    return {
        root: {
            padding: theme.spacing(1),
            fontFamily: theme.typography.fontFamily
        },
        container: {
            height: theme.spacing(34)

        },
        title: {

        },
        description: {

        },
        content: {
            background: theme.palette.primary.main,
            height: "100%"
        }
    }
})