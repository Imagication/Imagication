import React from 'react';
import {Grid } from '@mui/material'


function MobileText() {
  
    return (
        <div className='story pt-48'>
            <Grid direction='column' container rowGap={2} className='story-container'>
                <div className='story-main'>
                Student-First Initiative to Enhance the Educational Journey
                </div>
                <Grid container justifyContent='center' alignItems='center'>
                    <div className='story-subtext'>
                    Imagication’s co-founders, Diana Rosado and Bryan Pinos wanted to level the playing field for education. After many conversations, they revolutioned college tours - one where students can walk around and interact with current college students.
                    </div>
                </Grid>
            </Grid>
            <Grid>
            </Grid>
        </div>
  
    );
  }
  
  export default MobileText;
  