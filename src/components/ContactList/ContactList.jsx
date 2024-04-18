import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
import './ContactList.css';
export const ContactList = () => {
  const filterValue = useSelector(({ filter }) => filter);
  const contacts = useSelector(({ contacts }) => contacts.items);
  const filteredContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().trim().includes(filterValue)
    );
  }, [contacts, filterValue]);

  return (
    <div className="container_list">
      {contacts.length > 0 && (
        <>
          <h3>ContactList</h3>
          <ul>
            {filteredContacts.map(contact => (
              <ContactItem key={contact.id} contact={contact} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
