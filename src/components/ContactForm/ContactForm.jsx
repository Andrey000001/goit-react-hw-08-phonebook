import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { fetchContacts, addContact } from '../../redux/reducers/operations';
import { toast } from 'react-toastify';
import LinkButton from 'components/UI/LinkButton/LinkButton';
import {
  StyledForm,
  Label,
  StyledField,
  ContainerBtn,
} from './ContactForm.styled';
import { useEffect } from 'react';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(({ contacts }) => contacts.items);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    const existingContact = contacts.find(
      ({ name }) =>
        name.toLowerCase().trim() === values.name.toLowerCase().trim()
    );
    if (existingContact) {
      return toast.info(`Такой контакт уже существует ${values.name}`);
    }
    dispatch(addContact({ ...values, id: nanoid() }));
  };

  return (
    <>
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        <StyledForm>
          <h3 style={{ textAlign: 'center' }}>Create new Contact</h3>
          <Label>
            Name
            <br />
            <StyledField
              type="text"
              name="name"
              pattern="^[A-Za-z\s]+"
              placeholder="Please enter only letters."
              required
            />
          </Label>
          <br />
          <Label>
            Number
            <br />
            <StyledField
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
              placeholder="Please enter 8 digits."
            />
          </Label>
          <br />
          <ContainerBtn style={{ textAlign: 'center' }}>
            <LinkButton type="submit">ADD CONTACT</LinkButton>
          </ContainerBtn>
        </StyledForm>
      </Formik>
    </>
  );
};
