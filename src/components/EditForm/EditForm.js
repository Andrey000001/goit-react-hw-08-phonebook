import { TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editUser } from '../../redux/auth/operations';
import { useNavigate, useParams } from 'react-router-dom';
import useInput from 'hooks/useInput';
import { useState } from 'react';
import LinkButton from 'components/UI/LinkButton/LinkButton';
export const EditForm = () => {
  const newName = useInput('');
  const newNumber = useInput('');

  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditUser = e => {
    e.preventDefault();
    if (id) {
      dispatch(editUser({ id, name: newName.value, number: newNumber.value }));
      setRedirect(true);
    } else {
      console.error('ID is undefined ');
    }
  };
  if (!redirect) {
    navigate('/contacts');
  }
  return (
    <div>
      <div>
        <form onSubmit={handleEditUser}>
          <Typography variant="h6">Change data</Typography>
          <div>
            <TextField
              label="New Name"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="text"
              name="name"
              {...newName}
              value={newName.value}
            />
            <TextField
              label="New Phone"
              variant="outlined"
              margin="normal"
              fullWidth
              required
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              {...newNumber}
              value={newNumber.value}
            />
          </div>
          <LinkButton sx={{ background: 'rgb(161 120 120)' }} type="submit">
            Change
          </LinkButton>
        </form>
      </div>
    </div>
  );
};
