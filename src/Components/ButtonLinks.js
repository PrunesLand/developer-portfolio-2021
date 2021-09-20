import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
        text: {
            color: theme.palette.text.primary
        }
    },
}));

export default function BasicButtonGroup() {
    const classes = useStyles();
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
        {
            id: 5,
            text: 'Projects',
            path: '/project',
            message: 'Project clicked'
        },
    ]

    return (
        <div className={classes.root}>
            <ButtonGroup variant="text" className={classes.text} aria-label="text primary button group">
                {buttonItems.map(item => (
                    <Button key={item.id} href={item.path} className={classes.text} onClick={() => {
                        history.push(item.path)
                        window.scrollTo(0, 0)
                    }}>
                        {item.text}
                    </Button>
                ))}
            </ButtonGroup>
        </div >
    );
}