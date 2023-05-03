import React from 'react'
import {Grid} from '@mui/material';
import { Link } from 'react-router-dom';

export default function Quote() {

    return(
        <div className=' pb-48'>
            <Grid container alignItems='center' justifyContent='center' direction='column' rowGap={2}>
                <div className='quote-header'>
                Become one of the first schools to join the metaverse!
                </div>
                <div className='white quote-subtext'>
                First 5 will receive a discounted quote
                </div>
                <Link to="/pricing">
                    <button className='contact-btn'>
                        Get a quote
                    </button>
                </Link>

            </Grid>
        </div>
    )
}