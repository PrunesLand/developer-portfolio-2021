import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from "@material-ui/core";
import { BsInfoCircle } from 'react-icons/bs';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { useHistory } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { BiMenu } from 'react-icons/bi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const navStyle = makeStyles((theme) => {
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
            background: theme.palette.primary.dark
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
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
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
            }
        },
        menu: {
            fontSize: '2rem',
            cursor: 'pointer'
        },
        footer: {
            background: theme.palette.primary.dark,
            height: '25vh',
            [theme.breakpoints.up('md')]: {
                height: '30vh'
            }

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
            fontSize: theme.spacing(1.8),
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
            fontSize: theme.spacing(1.8),
            color: theme.palette.text.secondary,
            [theme.breakpoints.up('sm')]: {
                fontSize: theme.spacing(2.5)
            }
        },
        copyright: {
            fontSize: theme.spacing(1.8),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            paddingTop: theme.spacing(3)
        },
        buttonText: {
            color: theme.palette.text.secondary
        }

    }
})

const buttonItems = [
    {
        id: 1,
        text: 'About Me',
        path: '/',
        message: 'About me clicked'
    },
    {
        id: 2,
        text: 'My Story',
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

export default function Navigation({ children }) {
    const history = useHistory()
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
            <div
                className={classes.iconContainer}
            >
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

    function TemporaryDrawer() {
        const history = useHistory()
        const classes = navStyle()

        const [state, setState] = React.useState({

            left: false,

        });

        const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };

        const list = (anchor) => (
            <div

            >
                <List>
                    {buttonItems.map((item) => (
                        <ListItem button key={item.id}>
                            <ListItemText primary={item.text} onClick={() => {
                                history.push(item.path)
                                toggleDrawer(anchor, false)
                            }} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );

        return (
            <div
                className={classes.drawer}
            >
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <BiMenu onClick={toggleDrawer(anchor, true)} className={classes.menu} />
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        );
    }

    function BasicButtonGroup() {
        const history = useHistory()



        return (
            <div className={classes.rootButton}>
                <ButtonGroup variant="text" color='default' aria-label="text primary button group">
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
                className={classes.appbar}
            >
                <Toolbar

                >

                    <Typography
                        className={classes.title}
                    >
                        Pranaya Anargya

                    </Typography>
                    <IconContainer />
                    <TemporaryDrawer />
                </Toolbar>
            </AppBar>
            <div className={classes.page}>
                <div className={classes.toolBar}></div>
                {children}

            </div>
            <div className={classes.buttonWrapper}>
                <BasicButtonGroup />
            </div>
            <footer
                className={classes.footer}
            >
                <div
                    className={classes.fContainer}
                >
                    <div
                        className={classes.listDiv}
                    >
                        <ul>

                            <li
                                className={classes.listItem}
                            >
                                <Typography
                                    className={classes.listText}
                                    onClick={() => {
                                        history.push('/')
                                    }}
                                >
                                    About me
                                </Typography>
                            </li>
                            <li
                                className={classes.listItem}
                            >
                                <Typography
                                    className={classes.listText}
                                    onClick={() => {
                                        history.push('/story')
                                    }}
                                >
                                    My Story
                                </Typography>
                            </li>
                            <li
                                className={classes.listItem}
                            >
                                <Typography
                                    className={classes.listText}
                                    onClick={() => {
                                        history.push('/experience')
                                    }}
                                >
                                    Experience
                                </Typography>
                            </li>
                            <li
                                className={classes.listItem}
                            >
                                <Typography
                                    className={classes.listText}
                                    onClick={() => {
                                        history.push('/contact')
                                    }}
                                >
                                    Contact
                                </Typography>
                            </li>
                        </ul>
                    </div>
                    <div
                        className={classes.fContact}
                    >
                        <Typography
                            className={classes.contactText}
                        >
                            Contact me at:
                        </Typography>
                        <Typography
                            className={classes.contactText}
                        >
                            pranarg.business@gmail.com
                        </Typography>
                        <div>
                            <FaGithub className={classes.github} onClick={() => window.open('https://github.com/PrunesLand')} />
                            <FaLinkedin className={classes.linkedin} onClick={() => window.open('https://www.linkedin.com/in/pranaya-anargya-22b585195/')} />
                        </div>
                    </div>
                </div>
                <div>
                    <Typography
                        className={classes.copyright}
                    >
                        &copy; {new Date().getFullYear()} Prunesland
                    </Typography>
                </div>
            </footer>
        </div>
    )
}
