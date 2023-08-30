import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

import { DeleteModal } from 'components/DeleteModal';
import { Spinner } from 'components/Spinner';
import { ContactForm } from 'components/ContactFormRTK';
import { FormModal } from 'components/FormModal';
import { ContactCardOptions } from 'components/ContactCardOptions';
import {
  ContentWrapper,
  ImageWrapper,
  InfoWrapper,
  InnerWrapper,
  OuterWrapper,
  StyledDelButton,
} from './ContactCard.styled';
import userImage from 'images/itemImage.jpg';

import { errorNotify, successNotify } from 'utils';
import {
  useEditContactMutation,
  useRemoveContactMutation,
} from 'redux/contacts/contactsApiRTK';

export const ContactCard = ({ data: { name, number, id }, chooseContact }) => {
  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);

  const [editContact, editContactData] = useEditContactMutation();
  const [removeContact, removeContactData] = useRemoveContactMutation();

  const closeModal = () => {
    setIsDeleteModalShown(false);
    setIsEditModalShown(false);
  };

  const handleDeleteContact = async () => {
    const response = await removeContact(id);
    const isSuccess = !response.error;

    if (isSuccess) {
      successNotify(`Contact "${name}" was successfully deleted`);
      chooseContact(null);
    } else {
      errorNotify('Something went wrong with deleting this contact');
    }

    closeModal();
  };

  const handleEditContact = async data => {
    if (name === data.name && number === data.number) {
      closeModal();
      return;
    }

    const response = await editContact(data);
    const isSuccess = !response.error;

    if (isSuccess) {
      successNotify(`Contact "${name}" was successfully edited`);
      chooseContact(response.data);
    } else {
      errorNotify('Something went wrong with editing this contact');
    }

    closeModal();
  };

  return (
    <>
      <OuterWrapper>
        <InnerWrapper>
          <ContentWrapper>
            <InfoWrapper>
              <ImageWrapper>
                <img src={userImage} alt="Contact avatar" width={100} />
              </ImageWrapper>
              <h3>{name}</h3>
            </InfoWrapper>
            <ContactCardOptions name={name} number={number} />
            <StyledDelButton
              fullWidth
              variant="contained"
              onClick={() => setIsEditModalShown(true)}
            >
              Edit
              {editContactData.isLoading ? (
                <Spinner size={19} />
              ) : (
                <FiEdit size={23} />
              )}
            </StyledDelButton>
            <StyledDelButton
              fullWidth
              variant="contained"
              onClick={() => setIsDeleteModalShown(true)}
            >
              Delete
              {removeContactData.isLoading ? (
                <Spinner size={19} />
              ) : (
                <MdDelete size={23} />
              )}
            </StyledDelButton>
          </ContentWrapper>
        </InnerWrapper>
      </OuterWrapper>
      {isEditModalShown && (
        <FormModal onClose={closeModal}>
          <ContactForm
            handleContactChange={handleEditContact}
            initialValues={{ name, id, number }}
          />
        </FormModal>
      )}
      {isDeleteModalShown && (
        <DeleteModal
          agreeFunc={handleDeleteContact}
          onClose={closeModal}
          toDeleteName={name}
        />
      )}
    </>
  );
};
