import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Divider, Box, Grid } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FavoriteIcon from '@mui/icons-material/Favorite'; 
import WatchLaterIcon from '@mui/icons-material/WatchLater'; 
import MovieIcon from '@mui/icons-material/Movie'; 
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpeg';

const Sidebar = ({ handleDrawerToggle }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path) => location.pathname === path;

    const handleNavigation = (path) => {
        navigate(path);
        handleDrawerToggle && handleDrawerToggle(); 
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
                <a href="https://shaun-adams.github.io/movie-catalog-app/#/movies" style={{ textDecoration: 'none' }}>
                    <img src={logo} alt="Logo" style={{ maxHeight: '50px', borderRadius: '50%' }} />
                </a>
            </Box>
            <Divider />
            <List>
                <ListItem
                    button
                    selected={isActive('/movies')}
                    onClick={() => handleNavigation('/movies')}
                >
                    <ListItemIcon>
                        <MovieIcon style={{ color: '#fff' }} /> {/* Use the MovieIcon */}
                    </ListItemIcon>
                    <ListItemText primary="Movies" />
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
                    border: '2px solid orange', 
                    backgroundColor: 'orange', 
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
