import MobileNavbar from "../navbar/MobileNavbar";
import MobileBody from "../Body/MobileBody";
import MobileTestimonials from "../Body/MobileTestimonials";
import CurrentWork from "../Body/CurrentWork";
import Contact from "../Body/Contact";
import MobileFooter from "../Body/MobileFooter";
import MobileHero from "../Body/MobileHero";
import LaptopBody from "../Body/LaptopBody";
import LaptopFooter from "../Body/LaptopFooter";
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Landing() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    return (
        <div >
            <MobileNavbar/>
            <MobileHero/>
            {isMobile ? <MobileBody /> : <LaptopBody />}
            <MobileTestimonials/>
            <CurrentWork/>
            <Contact/>
            {isMobile ? <MobileFooter/> : <LaptopFooter/> }
        </div>
  
    );
  }
  
  export default Landing;
  