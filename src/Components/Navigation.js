import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";
import { BsInfoCircle } from 'react-icons/bs';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const navStyle = makeStyles((theme) => {
    return {
        root: {
            flex: 1
        },
        title: {
            flexGrow: 1,
            textAlign: 'center',
            color: theme.palette.secondary.main

        },
        appbar: {
            flexGrow: 1,
            background: theme.palette.primary.light
        },
        infoIcon: {
            fontSize: '1.5rem',
            cursor: 'pointer'
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }
})

export default function Navigation() {

    const classes = navStyle() // to use the styles of makestyle() from material-ui

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const IconContainer = () => {
        return (
            <div>
                <div
                    onClick={() => {
                        handleOpen()
                        console.log('Info clicked')
                    }}
                >
                    <BsInfoCircle className={classes.infoIcon} />
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">Transition modal</h2>
                            <p id="transition-modal-description">react-transition-group animates me.</p>
                        </div>
                    </Fade>
                </Modal>
            </div>

        )
    }

    return (
        <div
            className={classes.root}
        >
            <AppBar
                position='static'
                className={classes.appbar}
            >
                <Toolbar>

                    <Typography
                        className={classes.title}
                        variant='h4'
                    >
                        Pranaya Anargya
                    </Typography>
                    <IconContainer />
                </Toolbar>
            </AppBar>
        </div>
    )
}
