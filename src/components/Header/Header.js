import { AppBar, Toolbar } from '@mui/material';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu.js/UserMenu';
import LinkButton from 'components/UI/LinkButton/LinkButton';
import './Header.css';
export function Header() {
  const { isLoggedIn } = useAuth();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          {!isLoggedIn && (
            <LinkButton component={Link} to="/" className="btnBar titleHome">
              HOME
            </LinkButton>
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
