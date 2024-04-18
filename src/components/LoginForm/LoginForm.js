import { Box, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import { toast } from 'react-toastify';
import useInput from 'hooks/useInput';
import LinkButton from 'components/UI/LinkButton/LinkButton';
import './LoginForm.css';
export const LoginForm = () => {
  const dispatch = useDispatch();
  const userEmail = useInput('');
  const userPassword = useInput('');

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
          {...userEmail}
          value={userEmail.value}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          name="password"
          {...userPassword}
          value={userPassword.value}
        />
        <LinkButton className="buttonLogin" type="submit">
          Отправить
        </LinkButton>
      </form>
    </Box>
  );
};
