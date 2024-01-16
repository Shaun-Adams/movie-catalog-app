import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from 'react-router-dom';
import logo  from './logo.jpeg'; // Replace with your logo component or image

const Sidebar = ({ handleDrawerToggle }) => {
    const location = useLocation();
  
    const isActive = (path) => location.pathname === path;
  

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
          // Adjust the height to align with the TopNavBar
          minHeight: 64, 
        }}
      >
        <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} /> {/* Logo here */}
      </Box>
      <Divider />
      <List>
        <ListItem {...isActive('/')} onClick={handleDrawerToggle}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        {/* Add more items here */}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{
        display: { xs: 'flex', sm: 'none' },
        justifyContent: 'flex-end',
        p: 1,
        position: 'absolute',
        bottom: 0,
        width: '100%'
      }}>
        <IconButton onClick={handleDrawerToggle}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default Sidebar;
