import React from 'react'
import {Grid} from '@mui/material';

export default function Contact() {

    function sendEmail() {
        window.location.href = 'mailto:info@imagication.co';
      }
    return(
        <div >
            <Grid container direction='column' justifyContent='center' alignItems='center' rowGap='40px' className='pt-48'>
                <Grid container direction='column' justifyContent='center' alignItems='center' rowGap='10px'>
                    <div className='contact-us'>
                        Contact Us
                    </div>
                    <div className='contact-email'>
                    Want to know more about Imagication? Feel free to contact us!
                    </div>
                </Grid>
                <Grid>
                    <button onClick={sendEmail} className ='contact-btn' >
                        Email us
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}