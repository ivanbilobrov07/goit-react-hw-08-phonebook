import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';

import { DeleteModal } from 'components/DeleteModal';
import { ContactForm } from 'components/ContactFormThunk';
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

import { editContact, removeContact } from 'redux/contacts/contactsApiThunk';

export const ContactCard = ({ data: { name, number, id }, chooseContact }) => {
  const dispatch = useDispatch();

  const [isDeleteModalShown, setIsDeleteModalShown] = useState(false);
  const [isEditModalShown, setIsEditModalShown] = useState(false);

  const closeModal = () => {
    setIsDeleteModalShown(false);
    setIsEditModalShown(false);
  };

  const handleDeleteContact = async () => {
    dispatch(removeContact(id));
    chooseContact(null);
    closeModal();
  };

  const handleEditContact = async data => {
    if (name === data.name && number === data.number) {
      closeModal();
      return;
    }

    dispatch(editContact(data));
    chooseContact(data);
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
              <FiEdit size={23} />
            </StyledDelButton>
            <StyledDelButton
              fullWidth
              variant="contained"
              onClick={() => setIsDeleteModalShown(true)}
            >
              Delete
              <MdDelete size={23} />
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
