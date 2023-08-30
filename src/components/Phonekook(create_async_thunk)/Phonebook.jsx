import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectIsLoading } from 'redux/selectors';
import { addContact, getContacts } from 'redux/contacts/contactsApiThunk';
import { errorNotify } from 'utils';

import { ContactForm } from 'components/ContactFormThunk';
import { Controlls } from 'components/Controlls';
import { Modal } from 'components/Modal';
import { FormModal } from 'components/FormModal';
import { Spinner } from 'components/Spinner';
import { ContactList } from 'components/ContactListThunk';
import { ContactCard } from 'components/ContactCardThunk';
import { ContentWrapper } from './Phonebook.styled';

export const Phonebook = () => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [contactCardData, setContactCardData] = useState(null);

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  console.log(isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      errorNotify(error);
    }
  }, [error]);

  useEffect(() => {
    dispatch(getContacts());
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

      {isLoading && (
        <Modal>
          <Spinner position="center" />
        </Modal>
      )}
      {error && errorNotify()}
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
