import React from 'react';
import { Button, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../services/AuthContext';

const ProfileButton = ({ user }) => {
    const { currentUser, signOut } = useAuth();

    return (
        <>
            {currentUser ? (
                <>
                  <Button
                        sx={{ color: 'white', mr: 1 }}
                        startIcon={user ? <Avatar src={user.photoURL} /> : <AccountCircleIcon />}
                        onClick={signOut}
                        color="inherit"
                    >
                        Logout
                  </Button>
                </>
            ) : (
                <Button
                    onClick={() => window.location.href = `${window.location.origin}/movie-catalog-app/#/login`}
                    color="inherit"
                >
                    Login
                </Button>
            )}
        </>
    );
};

export default ProfileButton;
