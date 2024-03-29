import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from './SearchBar';
import ProfileButton from './ProfileButton'; 


const TopNavBar = ({ drawerWidth, handleDrawerToggle , onSearch }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                bgcolor: '#222e50' 
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
