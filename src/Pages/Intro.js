import { Typography } from '@material-ui/core'
import React from 'react'
import { introStyle } from '../Styles/PageStyles'


export default function Intro() {
    return (
        <>
            <section>
                <div className={introStyle.hero}>
                    <div>
                        <Typography>Image position</Typography>
                    </div>
                    <div>
                        <Typography variant='h3'>Job Title</Typography>
                        <Typography variant='h5'>Description of yourself and brief introduction.</Typography>
                    </div>
                </div>
            </section>
        </>
    )
}
