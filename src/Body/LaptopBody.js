import React from 'react'
import {Grid} from '@mui/material';
import WavingCraig from './Videos/Waving-Craig.gif';
import Joy from './Videos/Jumping-For-Joy.gif';
import Looking from './Videos/look-around.gif'

export default function LaptopBody() {

    return (
        <div>
            <Grid container
            direction='row'
            alignItems='center'
            justifyContent='center'
            className='darkpurple pb-48' 
            >  
                <Grid  item container
                justifyContent="flex-start"
                alignItems="flex-start"
                direction='column'
                style={{borderRadius: '15px 15px 0px 0px', width:'40%'}}
                >
                    <Grid item justifyContent="flex-start">
                        <div className ='redfont' >
                            Stay Connected
                        </div>
                    </Grid>
                    <Grid item>
                        <div className='subtitle1 '>
                        Invite your friends and never feel alone
                        </div>
                    </Grid>
                    <Grid item >
                        <div className='body1'>
                        No cash? No worries. With Imagication, you can plan a virtual trip to any campus and interact with other students!
                        </div>
                    </Grid>
                </Grid>  
                <img src ={WavingCraig} alt='Waving Character model'/>              
            </Grid>
{/* 2nd part */}
<Grid container
            direction='row'
            alignItems='center'
            justifyContent='center'
            className='darkpurple pb-48' 
            style={{position:'relative'}}
            >  
                <img src ={Looking} alt='Waving Character model'/> 
                <Grid  item container
                justifyContent="flex-start"
                alignItems="flex-start"
                direction='column'
                style={{borderRadius: '15px 15px 0px 0px', width:'40%', marginLeft:'200px'}}
                >
                    <Grid item justifyContent="flex-start">
                        <div className ='redfont' >
                        Interactive Environment
                        </div>
                    </Grid>
                    <Grid item>
                        <div className='subtitle1 '>
                        Ditch 2D virtual tours                       </div>
                    </Grid>
                    <Grid item >
                        <div className='body1'>
                        Enter the metaverse and interact with your surroundings to learn more about the colleges.                      </div>
                    </Grid>
                </Grid>  
             
            </Grid>
{/* 3rd part */}
<Grid container
            direction='row'
            alignItems='center'
            justifyContent='center'
            className='darkpurple pb-48' 
            >  
                <Grid  item container
                justifyContent="flex-start"
                alignItems="flex-start"
                direction='column'
                style={{borderRadius: '15px 15px 0px 0px', width:'40%'}}
                >
                    <Grid item justifyContent="flex-start">
                        <div className ='redfont' >
                        Always Accessible
                        </div>
                    </Grid>
                    <Grid item>
                        <div className='subtitle1 '>
                        No download necessary                        </div>
                    </Grid>
                    <Grid item >
                        <div className='body1'>
                        Any campus is just a click away                        </div>
                    </Grid>
                </Grid>  
                <img src ={Joy} alt='Waving Character model'/>              
            </Grid>
        </div>

    )
}