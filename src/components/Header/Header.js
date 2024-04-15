import { AppBar, Toolbar } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth } from 'hooks';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu.js/UserMenu';

export function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {!isLoggedIn && (
            <Button
              variant="h6"
              component={Link}
              sx={{
                maxWidth: '64px',
                marginRight: 'auto',
                flexGrow: 1,
                textDecoration: 'none',
                color: '#ffff',
                display: { xs: 'none', sm: 'block' },
              }}
              to="/"
            >
              Home
            </Button>
          )}
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
