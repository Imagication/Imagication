import React from 'react'
import SchoolHero from '../Body/ForSchools/SchoolHero'
import MobileNavbar from "../navbar/MobileNavbar";
import MobileFooter from "../Body/MobileFooter";
import LaptopFooter from "../Body/LaptopFooter";
import {Grid} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Banner from '../Body/ForSchools/Banner';
import Benefits from '../Body/ForSchools/Benefits';
import Quote from '../Body/ForSchools/Quote.js'

export default function ForSchools() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return(
        <div >
            <MobileNavbar/>
            <Grid className='darkpurple'>
                <SchoolHero/>
                <Banner/>
                <Benefits/>
                <Quote/>
            </Grid>
            
            {isMobile ? <MobileFooter/> : <LaptopFooter/> }
        </div>
    )
}