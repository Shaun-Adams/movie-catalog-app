import { Button, Avatar } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ProfileButton = ({ user }) => {
  return (
    <Button
      sx={{ color: 'white' }}
      startIcon={user ? <Avatar src={user.photoURL} /> : <AccountCircleIcon />}
    >
      {user ? 'Profile' : 'Login'}
    </Button>);
};

export default ProfileButton;
