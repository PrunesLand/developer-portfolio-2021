import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const introStyle = makeStyles({
    root: {
        flex: 1,
        overflow: 'none'
    }
})

export default function Intro() {

    const classes = introStyle()

    return (
        <div
            className={classes.root}
        >
            <section>
                <div >
                    <div>
                        <Typography>Image position</Typography>
                    </div>
                    <div>
                        <Typography variant='h3'>Job Title</Typography>
                        <Typography variant='h5'>Description of yourself and brief introduction.</Typography>
                    </div>
                </div>
            </section>
        </div>
    )
}
