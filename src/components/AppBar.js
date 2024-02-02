
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import  Cart from '../Icons/cart'

export default function TopNavBar() {
 
  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Cart />
              </Badge>
            </IconButton>
           
          </Box>
        
        </Toolbar>
      </AppBar>
    </>
  );
}