import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";
import { BsInfoCircle } from 'react-icons/bs';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
// import ButtonLinks from './ButtonLinks';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from 'react-router-dom';

const navStyle = makeStyles((theme) => {
    return {
        root: {
            flex: 1,

        },
        title: {
            flexGrow: 1,
            textAlign: 'center',
            color: theme.palette.secondary.dark

        },
        appbar: {
            flexGrow: 1,
            background: theme.palette.primary.dark
        },
        infoIcon: {
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: theme.palette.secondary.dark
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
        page: {
        },
        toolBar: theme.mixins.toolbar,
        buttonWrapper: {
            flexGrow: 1

        },
        rootButton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }
})

export default function Navigation({ children }) {

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
                            <h3>Details about this website</h3>
                            <p>This website was made by Prunesland to showcase his skills in React development.</p>
                            <p>The tools used in the makings of this website are:</p>
                            <ul>
                                <li>React library</li>
                                <li>Material UI</li>
                                <li>Netlify</li>
                            </ul>
                        </div>
                    </Fade>
                </Modal>
            </div>

        )
    }

    function BasicButtonGroup() {
        const history = useHistory()

        const buttonItems = [
            {
                id: 1,
                text: 'About me',
                path: '/',
                message: 'About me clicked'
            },
            {
                id: 2,
                text: 'My story',
                path: '/story',
                message: 'My story clicked'
            },
            {
                id: 3,
                text: 'Experience',
                path: '/experience',
                message: 'Experience clicked'
            },
            {
                id: 4,
                text: 'Contact',
                path: '/contact',
                message: 'Contact clicked'
            },
        ]

        return (
            <div className={classes.rootButton}>
                <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                    {buttonItems.map(item => (
                        <Button key={item.id} href={item.path} onClick={() => history.push(item.path)}>
                            {item.text}
                        </Button>
                    ))}
                </ButtonGroup>
            </div >
        );
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
            <div className={classes.page}>
                <div className={classes.toolBar}>
                    {children}
                </div>
            </div>
            <div className={classes.buttonWrapper}>
                <BasicButtonGroup />
            </div>
        </div>
    )
}
