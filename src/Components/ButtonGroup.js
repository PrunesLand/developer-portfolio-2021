import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { buttonItems } from './navigation/pageLink';
import { useHistory } from 'react-router-dom';
import { style } from './navigation/styles';

export const NavButtons = () => {
    const history = useHistory()
    const classes = style()

    return (
        <div className={classes.rootButton}>
            <ButtonGroup variant="text" color='default' aria-label="text primary button group">
                {buttonItems.map(item => (
                    <Button key={item.id} onClick={() => {
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

export default NavButtons
