import React from 'react'
import {Grid, Box} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
export default function BasePackage() {


    const packages = [
        {
            type: '5 exterior buildings',
        },
        {
            type: '5 Info Hubs',
        },
        {
            type: 'Text Chat',
        },
        {
            type: 'Voice Chat',
        },
        {
            type: 'Terrain',
        },
        {
            type: '500 Users',
        }
        
    ]
    return(
        <div className='pt-48 pb-48' >
            <Grid container justifyContent='center' direction='column' alignItems='center' >
                <Grid>
                    <div className='pricing-title pb-48'>
                        Check out our base package!
                    </div>
                </Grid>
                <Grid className='base-container'>
                    <Box>
                        <div className='base-title' style={{
                            background: 'linear-gradient(269.62deg, #FF5555 -26.37%, rgba(255, 126, 85, 0.97) 134.38%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }} >
                            Base Package
                        </div>
                        <div className='base-pricing' >
                            $15,000
                        </div>
                        <div >
                            {packages.map((types, index) => (
                            <Grid container key={index} direction='row' alignItems='center' >
                                <CheckIcon/>
                                <p style={{fontWeight:'500'}}>{types.type} </p>
                            </Grid >
                            ))}

                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}