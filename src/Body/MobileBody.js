import React from 'react'
import {Grid} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import { grey } from '@mui/material/colors';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

export default function MobileBody() {

    return (
        <div>
            <Grid  item container
            className='darkpurple pb-48' 
            justifyContent="center"
            alignItems="center"
            direction='column'
            style={{borderRadius: '15px 15px 0px 0px'}}
            >
                <Grid className='pt-48'>
                    <div>
                        <GroupsIcon sx={{ color: grey[50], fontSize: 50 }} fontSize="large" />
                    </div>
                </Grid>
                <Grid item justifyContent="center">
                    <div className ='redfont' >
                        Stay Connected
                    </div>
                </Grid>
                <Grid item className='w-75'>
                    <div className='subtitle1 '>
                    Invite your friends and never feel alone
                    </div>
                </Grid>
                <Grid item className='w-80'>
                    <div className='body1'>
                    No cash? No worries. With Imagication, you can plan a virtual trip to any campus and interact with other students!
                    </div>
                </Grid>
            </Grid>
            <Grid  item container
            className='darkpurple pb-48' 
            justifyContent="center"
            alignItems="center"
            direction='column'
            >
                <Grid className='pt-48'>
                    <div>
                        <FollowTheSignsIcon sx={{ color: grey[50], fontSize: 50 }} fontSize="large" />
                    </div>
                </Grid>
                <Grid item justifyContent="center">
                    <div className ='redfont' >
                        Interactive Environment
                    </div>
                </Grid>
                <Grid item className='w-75'>
                    <div className='subtitle1 '>
                    Ditch 2D virtual tours
                    </div>
                </Grid>
                <Grid item className='w-80'>
                    <div className='body1'>
                    Enter the metaverse and interact with your surroundings to learn more about the colleges.
                    </div>
                </Grid>
            </Grid>
            <Grid  item container
            className='darkpurple pb-48' 
            justifyContent="center"
            alignItems="center"
            direction='column'
            style={{borderRadius: '0px 0px 15px 15px'}}
            >
                <Grid className='pt-48'>
                    <div>
                        <TagFacesIcon sx={{ color: grey[50], fontSize: 50 }} fontSize="large" />
                    </div>
                </Grid>
                <Grid item justifyContent="center">
                    <div className ='redfont' >
                        Always Accessible
                    </div>
                </Grid>
                <Grid item className='w-75'>
                    <div className='subtitle1 ' justifyContent="center">
                    No download necessary
                    </div>
                </Grid>
                <Grid item className='w-80'>
                    <div className='body1'>
                    Just a laptop and you!
                    </div>
                </Grid>
            </Grid>
        </div>

    )
}