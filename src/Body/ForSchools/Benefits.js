import React from 'react'
import {Grid, useMediaQuery} from '@mui/material';

export default function Benefits() {

    const isBelow768 = useMediaQuery('(max-width:768px)');
    return(
        <div className='pt-48 pb-48'>
            <Grid container alignItems='center' direction={isBelow768 ? 'column' : 'row'} justifyContent='center'>

            
            <Grid className='benefits-container' direction='column' rowGap={1} >
                <div className='benefits-header'>
                    METAVERSE
                </div>
                <br/>
                <div className='white' style={{fontWeight:'600'}}>
                A Thriving Campus
                </div>
                <br/>
                <div style={{color:'#BBBBBB', fontSize:'13px'}}>
                Become the campus that never sleeps with a campus that is supported 24/7
                </div>
            </Grid>

            {/* metrics */}
            <Grid className='benefits-container' direction='column' rowGap={1} >
                <div className='benefits-header'>
                METRICS
                </div>
                <br/>
                <div className='white' style={{fontWeight:'600'}}>
                Fine grained analytics                </div>
                <br/>
                <div style={{color:'#BBBBBB', fontSize:'13px'}}>
                Our meta-tours provide 1000s of touch points in every map for fine grained analytics                </div>
            </Grid>

            {/* User experience */}
            <Grid className='benefits-container' direction='column' rowGap={1} >
                <div className='benefits-header'>
                USER EXPERIENCE
                </div>
                <br/>
                <div className='white' style={{fontWeight:'600'}}>
                Visitor Engagement                </div>
                <br/>
                <div style={{color:'#BBBBBB', fontSize:'13px'}}>
                Our meta-tours provide 1000s of touch points in every map for fine grained analytics                </div>
            </Grid>
            </Grid>
        </div>
    )
}