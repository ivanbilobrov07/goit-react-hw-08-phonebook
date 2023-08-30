import { useState } from 'react';

import { useAddContactMutation } from 'redux/contacts/contactsApiRTK';
import { errorNotify, successNotify } from 'utils';

import { ContactForm } from 'components/ContactFormRTK';
import { ContactList } from 'components/ContactListRTK';
import { Controlls } from 'components/Controlls';
import { FormModal } from 'components/FormModal';
import { ContentWrapper } from './Phonebook.styled';
import { ContactCard } from 'components/ContactCardRTK';

export const Phonebook = () => {
  const [addContact] = useAddContactMutation();

  const [contactCardData, setContactCardData] = useState(null);
  const [isModalShown, setIsModalShown] = useState(false);

  const handleAddContact = async data => {
    const response = await addContact(data);
    const isSuccess = !response.error;

    isSuccess
      ? successNotify(
          `New contact "${response.data.name}" was successfully added`
        )
      : errorNotify('Something went wrong with adding this contact');
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
