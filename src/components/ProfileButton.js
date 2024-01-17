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
                        color="inherit"
                    >
                    <Button
                        onClick={signOut}
                        color="inherit"
                    >
                        Logout
                    </Button>
                  </Button>
                </>
            ) : (
                <Button
                    onClick={() => window.location.href = '/login'}
                    color="inherit"
                >
                    Login
                </Button>
            )}
        </>
    );
};

export default ProfileButton;
