import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function BasicButtonGroup() {
    const classes = useStyles();

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
        <div className={classes.root}>
            <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
                {buttonItems.map(item => (
                    <Button key={item.id} href={item.path} onClick={(e) => {

                    }}>
                        {item.text}
                    </Button>
                ))}
            </ButtonGroup>
        </div >
    );
}