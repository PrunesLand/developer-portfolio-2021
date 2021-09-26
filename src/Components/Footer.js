import { Typography } from '@material-ui/core'
import React from 'react'
import { style } from './navigation/styles'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { buttonItems } from './navigation/pageLink';
import { useHistory } from 'react-router-dom';
const Footer = () => {
    const history = useHistory()
    const classes = style()

    return (
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
                        {/* Displays all button group links with .map() and array accessed from /pageLinks.js */}
                        {buttonItems.map(item => {
                            return (
                                <li
                                    className={classes.listItem}
                                    key={item.id}
                                >
                                    <Typography
                                        className={classes.listText}
                                        onClick={() => {
                                            history.push(item.path)
                                            window.scrollTo(0, 0)
                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                </li>
                            )
                        })}

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
    )
}

export default Footer
