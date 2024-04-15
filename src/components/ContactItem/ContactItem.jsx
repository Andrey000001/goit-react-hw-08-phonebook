import { Item } from './ContactItem.styled';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import * as React from 'react';

import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Typography } from '@mui/material';
const ContactItem = ({ contact }) => {
  const [navigateToEdit, setNavigateToEdit] = useState(false);
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const isLoading = useSelector(({ contacts }) => contacts.isLoading);
  const handleDelete = ids => {
    dispatch(deleteContact(ids));
  };
  const handleButtonClick = id => {
    setNavigateToEdit(true);
  };
  if (navigateToEdit) {
    return <Navigate to={`/change/${id}`} />;
  }

  return (
    <>
      <Item
        style={{
          listStyle: 'none',
          display: 'flex',
          alignItems: 'center',
          border: '1px solid rgba(0, 0, 0, 0.23)',
          borderRadius: '3px',
          marginBottom: '5px',
          padding: '3px 10px',
          justifyContent: 'space-between',
          background: 'rgb(139 121 121 / 20%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <Typography sx={{ fontWeight: 400 }}>
            <span style={{ fontWeight: 500 }}>Name:</span> {name}
          </Typography>
          <Typography sx={{ fontWeight: 400 }}>
            <span style={{ fontWeight: 500 }}>Phone:</span> {number}
          </Typography>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button
            id={id}
            sx={{
              padding: '0px',
              marginBottom: '2px',
              background: 'rgb(161 120 120)',
            }}
            component={Link}
            onClick={() => handleButtonClick(id)}
          >
            Edit
          </Button>
          <Button
            sx={{ padding: '0px', background: 'rgb(161 120 120)' }}
            disabled={isLoading}
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
        </div>
      </Item>
    </>
  );
};
export default ContactItem;
