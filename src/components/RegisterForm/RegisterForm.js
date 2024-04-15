import { Button, TextField, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = e.target.elements.name.value;
    const surname = e.target.elements.surname.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    dispatch(register({ name: `${name} ${surname}`, email, password }));
    form.reset();
    toast.success('User is registered');
    setRedirect(true);
  };
  if (redirect) {
    navigate('/login');
  }
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Register</Typography>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="text"
          name="name"
        />
        <TextField
          label="Surname"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="text"
          name="surname"
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="email"
          name="email"
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password"
          name="password"
        />

        <Button
          sx={{ background: 'rgb(161 120 120)' }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Отправить
        </Button>
      </form>
    </Box>
  );
};
