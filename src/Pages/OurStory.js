import MobileNavbar from "../navbar/MobileNavbar";

import LaptopFooter from "../Body/LaptopFooter";
import MobileFooter from "../Body/MobileFooter";
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileText from "../Body/OurStory/MobileText";
import Team from "../Body/OurStory/Team.js";

function OurStory() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    return (
        <div> 
            <MobileNavbar/>
            <MobileText />
            <Team/>
            {isMobile ? <MobileFooter/> : <LaptopFooter/> }
        </div>
  
    );
  }
  
  export default OurStory;
  