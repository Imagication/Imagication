import MobileNavbar from "../navbar/MobileNavbar";
import LaptopFooter from "../Body/LaptopFooter";
import MobileFooter from "../Body/MobileFooter";
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Grid} from '@mui/material';
import BasePackage from "../Body/Pricing/BasePackage";
import CostCalculator from "../Body/Pricing/CostCalculator";
import FAQ from "../Body/Pricing/FAQ";

function Pricing() {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
    return (
        <div> 
            <MobileNavbar/>
            <div style={{backgroundColor:'#F5F5F5'}}>
                <Grid container justifyContent='center'>
                    <div className="pricing-header pt-48">
                        Pricing
                    </div>
                </Grid>
                <Grid container justifyContent='center' columnGap={10}>
                        <BasePackage />
                        {!isMobile && <CostCalculator/>}

                </Grid>
                <FAQ/>
            </div>

            
            {isMobile ? <MobileFooter/> : <LaptopFooter/> }
        </div>
  
    );
  }
  
  export default Pricing;
  