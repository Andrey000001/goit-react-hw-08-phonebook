import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContacts } from '../../redux/reducers/filterSlice';
import { TextField } from '@mui/material';
import './Filter.css';
export const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const handleKeyDown = e => {
    const { value } = e.target;
    setFilter(value);
    dispatch(updateContacts(value.toLowerCase().trim()));
  };

  return (
    <div className="filter_container">
      <h3>Search Contact</h3>
      <TextField
        label="Name"
        variant="outlined"
        margin="normal"
        fullWidth
        required
        value={filter}
        type="text"
        name="findName"
        onChange={handleKeyDown}
      />
    </div>
  );
};
