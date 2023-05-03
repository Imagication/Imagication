import React from 'react'
import {Grid} from '@mui/material';

export default function SchoolHero() {

    function sendEmail() {
        window.location.href = 'mailto:info@imagication.co';
      }
    return(
        <div className='pb-48 pt-48'>
            <Grid className='forschool-container' container justifyContent='center' direction='column' alignItems='center' rowGap={5}>
                <div className='hero-main' style={{padding:'0px 7px'}}>
                Let’s build your campus together
                </div>
                <div className='header-subtext'>
                Transform your campus tours and invite students from all over the world!
                </div>
                <button onClick={sendEmail} className='contact-btn'>
                    Get in touch
                </button>
            </Grid>
        </div>
    )
}