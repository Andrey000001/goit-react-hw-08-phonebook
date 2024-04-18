import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import './ContactPage.css';
import { useSelector } from 'react-redux';
const СontactsPage = () => {
  const isModalOpen = useSelector(state => state.modal.isModalOpen);
  console.log(isModalOpen);

  return (
    <>
      <div className="container">
        <ContactForm />
        <div className="container__filter">
          <Filter />
          <ContactList />
        </div>
      </div>
    </>
  );
};
export default СontactsPage;
