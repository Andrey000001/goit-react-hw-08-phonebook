import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
const СontactsPage = () => {
  return (
    <section>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '80px',
        }}
      >
        <ContactForm />
        <div
          style={{
            padding: '30px',
            background: '#fff4',
            border: '1px solid rgb(189 128 128)',
            borderRadius: '5px',
            maxWidth: '500px',
            width: '100%',
          }}
        >
          <Filter />
          <ContactList />
        </div>
      </div>
    </section>
  );
};
export default СontactsPage;
