import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { GoMail } from 'react-icons/go'

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '2.2rem'
    },
    typography: {
        padding: theme.spacing(0.5),
    },
    mail: {
        fontSize: '2.2rem',
        color: '#ea4335',
        cursor: 'pointer'
    },
}));

export default function SimplePopover() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <>
            <GoMail onClick={handleClick} className={classes.mail} />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>Email copied!</Typography>
            </Popover>
        </>
    );
}