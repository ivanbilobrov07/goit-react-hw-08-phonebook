import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError } from 'redux/selectors';
import { addContact, getContacts } from 'redux/contacts/contactsApiThunk';
import { errorNotify } from 'utils';

import { ContactForm } from 'components/ContactFormThunk';
import { Controlls } from 'components/Controlls';
import { FormModal } from 'components/FormModal';
import { ContactList } from 'components/ContactListThunk';
import { ContactCard } from 'components/ContactCardThunk';
import { ContentWrapper } from './Phonebook.styled';

export const Phonebook = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [contactCardData, setContactCardData] = useState(null);

  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      errorNotify(error);
    }
  }, [error]);

  useEffect(() => {
    const promise = dispatch(getContacts());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

  const handleAddContact = data => {
    dispatch(addContact(data));
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalShown(state => !state);
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <Controlls toggleModal={toggleModal} />

      {isModalShown && (
        <FormModal onClose={toggleModal}>
          <ContactForm handleContactChange={handleAddContact} />
        </FormModal>
      )}

      <ContentWrapper>
        <ContactList chooseContact={setContactCardData} />
        {contactCardData && (
          <ContactCard
            chooseContact={setContactCardData}
            data={contactCardData}
          />
        )}
      </ContentWrapper>
    </div>
  );
};
