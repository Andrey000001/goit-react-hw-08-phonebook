import { TextField, Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from 'hooks/useInput';
import Button from '../UI/LinkButton/LinkButton';
import './RegisterForm.css';
export const RegisterForm = () => {
  const userName = useInput('');
  const userSurname = useInput('');
  const userEmail = useInput('');
  const userPassword = useInput('');
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: `${userName.value} ${userSurname.value}`,
        email: userEmail.value,
        password: userPassword.value,
      })
    );
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
        <Typography variant="h6">Sing Up</Typography>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="text"
          name="name"
          {...userName}
        />
        <TextField
          label="Surname"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="text"
          name="surname"
          {...userSurname}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="email"
          name="email"
          {...userEmail}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          fullWidth
          required
          type="password"
          name="password"
          {...userPassword}
        />

        <Button className="buttonRegister" type="submit">
          Отправить
        </Button>
      </form>
    </Box>
  );
};
