import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export const AuthNav = () => {
  return (
    <div>
      <Button component={Link} to="/register" sx={{ color: '#fff' }}>
        SingUp
      </Button>
      <Button component={Link} to="/login" sx={{ color: '#fff' }}>
        LOGIN
      </Button>
    </div>
  );
};
