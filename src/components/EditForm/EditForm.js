import { TextField, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editUser } from '../../redux/auth/operations';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
export const EditForm = () => {
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEditUser = e => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (id) {
      dispatch(editUser({ id, name, number }));
      setRedirect(true);
    } else {
      console.error('ID is undefined ');
    }
  };
  if (redirect) {
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
            />
          </div>
          <Button sx={{ background: 'rgb(161 120 120)' }} type="submit">
            Change
          </Button>
        </form>
      </div>
    </div>
  );
};
