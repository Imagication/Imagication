import React from 'react'
import {Grid} from '@mui/material';
import Stevens from '../images/jpg/Stevens-2.jpg'
export default function Banner() {

    return(
        <div className='pt-48 pb-48' style={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container className='banner-container' spacing={2}>
          <Grid item xs={12} sm={6} >
            <img className='banner-pic' src={Stevens} alt='user visiting Imagication virtual campus' />
          </Grid>
          <Grid  item xs={12} sm={6} className='banner-text' >
            <div className='banner-header'>
              Bring the magic to your campus
            </div>
            <Grid>
            <div className='banner-body white'>
              Invite more people to your campus
            </div>
            <div className='banner-quote white'>
              Imagication makes it easier to showcase your school
            </div>
            </Grid>

          </Grid>
        </Grid>
      </div>
    )
}