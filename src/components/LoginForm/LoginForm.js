import { Box, Button, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      dispatch(login({ email, password }));
      form.reset();
    } catch (error) {
      toast.error('Неверный логин или пароль');
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <Typography variant="h6">Login</Typography>
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
          required
          fullWidth
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
