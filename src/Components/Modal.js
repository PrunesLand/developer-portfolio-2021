import React from 'react'
import { style } from './navigation/styles'
import { BsInfoCircle } from 'react-icons/bs';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const Showcase = () => {
    const classes = style()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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


export default Showcase
