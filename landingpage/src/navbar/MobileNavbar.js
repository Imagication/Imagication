import Logo from '../icons/logo.png'
import React, {useState} from 'react'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListIcon from '@mui/icons-material/List';
import { Link } from "react-router-dom";
import { Toolbar  } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function MobileNavbar() {
  const [open, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

    

    return (
      <div>
        <Grid container  direction='row'>
        <Grid item container justifyContent='flex-start' alignItems='center' className='p8' style={{width: '85%'}}>
            <img style ={{width:32}} src={Logo} alt='imagication logo'/>
            <Typography className='pl-8' style={{fontWeight:500}}>
              Imagication
            </Typography>

          </Grid>
          <Grid container justifyContent='flex-end' item style={{width:'15%'}} >
          <Box>
          <Toolbar>
            <IconButton 
              edge="start" 
              color="inherit" 
              aria-label="open drawer" 
              onClick={toggleDrawer(true)}
              sx={{ 
                mr: 2,
                display: {
                  xs: 'block',
                  sm: 'block',
                  md: 'block'
                }
              }}
            >
              <MenuIcon />
            </IconButton>

              {/* The outside of the drawer */}
              <Drawer
                //from which side the drawer slides in
                anchor="right"
                //if open is true --> drawer is shown
                open={open}
                //function that is called when the drawer should close
                onClose={toggleDrawer(false)}
                //function that is called when the drawer should open
                onOpen={toggleDrawer(true)}
              >
                  {/* The inside of the drawer */}
                  <Box sx={{
                    p: 2,
                    height: 1,

                  }}>


                    <Divider sx={{mb: 2}} />

                    <Box sx={{mb: 2}}>
                      <Link to='/'style={{textDecoration:'none', color: 'black'}}>
                      <ListItemButton>
                        <ListItemIcon>
                        <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                      </ListItemButton>
                      </Link>

                      <Link to='/ourstory' style={{textDecoration:'none', color: 'black'}}>
                      <ListItemButton>
                        <ListItemIcon>
                          <LightbulbIcon/>
                        </ListItemIcon >
                        <ListItemText primary="Our Story" />
                      </ListItemButton>
                      </Link>

                      <Link to='/forschools' style={{textDecoration:'none', color: 'black'}}>
                      <ListItemButton>
                        <ListItemIcon>
                          <SchoolIcon/>
                        </ListItemIcon >
                        <ListItemText primary="For Schools" />
                      </ListItemButton>
                      </Link>

                      <Link to='/pricing' style={{textDecoration:'none', color: 'black'}}>
                      <ListItemButton>
                        <ListItemIcon>
                          <AttachMoneyIcon/>
                        </ListItemIcon >
                        <ListItemText primary="Pricing" />
                      </ListItemButton>
                      </Link>
                    </Box>
                    

                  </Box>
                
              </Drawer>


            </Toolbar>
            </Box>
            </Grid>
        </Grid>
      </div>
    );
  }
  
  