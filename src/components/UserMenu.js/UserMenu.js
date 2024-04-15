import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const {
    user: { name = 'undefined' },
  } = useAuth();
  return (
    <Box
      sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
    >
      <Typography sx={{ color: '#fff', fontSize: '20px' }}>
        Your contacts- {name}
      </Typography>
      <Button
        component={Link}
        to="/login"
        sx={{ color: '#fff' }}
        onClick={() => dispatch(logOut())}
      >
        LOGOUT
      </Button>
    </Box>
  );
};
