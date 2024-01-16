import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box, Grid } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import for Favorites icon
import WatchLaterIcon from '@mui/icons-material/WatchLater'; // Import for Watch List icon
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg'; // Replace with your logo component or image

const Sidebar = ({ handleDrawerToggle }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;

    const handleNavigation = (path) => {
        navigate(path);
        handleDrawerToggle && handleDrawerToggle(); // Call the function if it exists
    };

    return (
        <Grid style={{ backgroundColor: '#333333', color: '#fff', height: '100vh' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    minHeight: 64,
                }}
            >
                <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} />
            </Box>
            <Divider />
            <List>
                <ListItem
                    button
                    selected={isActive('/movies')}
                    onClick={() => handleNavigation('/movies')}
                >
                    <ListItemIcon>
                        <HomeIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                    button
                    selected={isActive('/favorites')}
                    onClick={() => handleNavigation('/favorites')}
                >
                    <ListItemIcon>
                        <FavoriteIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Favorites" />
                </ListItem>
                <ListItem
                    button
                    selected={isActive('/watchlist')}
                    onClick={() => handleNavigation('/watchlist')}
                >
                    <ListItemIcon>
                        <WatchLaterIcon style={{ color: '#fff' }} />
                    </ListItemIcon>
                    <ListItemText primary="Watch List" />
                </ListItem>
                {/* Add more items here */}
            </List>
            <Box sx={{ flexGrow: 1 }} />
            <Divider />
            <Box
                sx={{
                    display: { xs: 'flex', sm: 'none' },
                    justifyContent: 'center',
                    p: 1,
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    border: '2px solid orange', // Updated border style to dark gray
                    backgroundColor: 'orange', // Updated background color to dark gray
                }}
            >
                <IconButton onClick={handleDrawerToggle}>
                    <ChevronLeftIcon style={{ color: '#fff' }} />
                </IconButton>
            </Box>
        </Grid>
    );
};

export default Sidebar;
