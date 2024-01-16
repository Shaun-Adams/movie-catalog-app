// TopNavBar.jsx
import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar'; // Make sure this is the correct path
import ProfileButton from './ProfileButton'; // Make sure this is the correct path


const TopNavBar = ({ drawerWidth, handleDrawerToggle , onSearch }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerToggle}
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <SearchBar onSearch={onSearch} />
        <ProfileButton />
      </Toolbar>
    </AppBar>
  );
};

export default TopNavBar;
