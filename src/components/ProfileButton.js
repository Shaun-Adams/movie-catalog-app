import React, { useState } from 'react';
import { Button, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Menu, MenuItem } from '@mui/material';
import { useAuth } from '../services/AuthContext';

const ProfileButton = ({ user }) => {
    const { currentUser, signOut } = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };


  return (
    <>
     <Button
      sx={{ color: 'white' }}
      startIcon={user ? <Avatar src={user.photoURL} /> : <AccountCircleIcon />}
      aria-controls="profile-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color="inherit"
    >
      Profile
    </Button>
    <Menu
        id="profile-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
        'aria-labelledby': 'profile-button',
        }}
    >
        {currentUser ? (
        <>
            <MenuItem onClick={handleClose}>View Profile</MenuItem>
            <MenuItem onClick={() => {
            handleClose();
            signOut();
            }}>Logout</MenuItem>
        </>
        ) : (
        <MenuItem onClick={() => {
            handleClose();
            // Navigate to login if not using <Link> from react-router-dom
            window.location.href = '/login'; 
        }}>Login</MenuItem>
        )}
    </Menu>
    </>
    );
};

export default ProfileButton;
