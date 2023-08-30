import { TextButton } from 'components/TextButton';
import { FilterContacts } from 'components/FilterContacts';
import { PhonebookControlls, SectionTitle } from './Controlls.styled';
import { ConstactsSelect } from 'components/ConstactsSelect';

export const Controlls = ({ toggleModal }) => {
  return (
    <PhonebookControlls>
      <SectionTitle>Your contacts</SectionTitle>
      <ConstactsSelect />
      <FilterContacts />
      <TextButton type="button" onClick={toggleModal} text="Add contact" />
    </PhonebookControlls>
  );
};
