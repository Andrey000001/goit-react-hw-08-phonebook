import { Item, Content, ContentButtons, Span } from './ContactItem.styled';
import LinkButton from 'components/UI/LinkButton/LinkButton';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/reducers/operations';
import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { active } from '../../redux/modal/slice';

const ContactItem = ({ contact }) => {
  const { name, number, id } = contact;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [navigateToEdit, setNavigateToEdit] = useState(false);
  const activeModal = useSelector(({ modal }) => modal.isModalOpen);
  const isLoading = useSelector(({ contacts }) => contacts.isLoading);
  const handleDelete = ids => {
    dispatch(deleteContact(ids));
  };
  const handleButtonClick = () => {
    dispatch(active(true));
    if (!activeModal) {
      setNavigateToEdit(true);
    }
  };
  useEffect(() => {
    if (navigateToEdit) {
      navigate(`/change/${id}`);
    }
  }, [navigateToEdit, id, navigate]);

  return (
    <>
      <Item>
        <Content>
          <Typography sx={{ fontWeight: 400 }}>
            <Span style={{ fontWeight: 500 }}>Name:</Span> {name}
          </Typography>
          <Typography sx={{ fontWeight: 400 }}>
            <Span style={{ fontWeight: 500 }}>Phone:</Span> {number}
          </Typography>
        </Content>

        <ContentButtons>
          <LinkButton
            id={id}
            className="btnSelect"
            component={Link}
            onClick={() => handleButtonClick(id)}
          >
            Edit
          </LinkButton>
          <LinkButton
            className="btnSelect"
            disabled={isLoading}
            onClick={() => handleDelete(id)}
          >
            Delete
          </LinkButton>
        </ContentButtons>
      </Item>
    </>
  );
};
export default ContactItem;
