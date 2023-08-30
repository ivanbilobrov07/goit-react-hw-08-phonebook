import { Card, TextField } from './ContactItem.styled';
import contactImage from 'images/itemImage.jpg';

export const ContactItem = ({ name, number }) => {
  return (
    <Card>
      <span>
        <img src={contactImage} alt="Contact avatar" />
      </span>
      <TextField>{name}</TextField>
      <TextField>{number}</TextField>
    </Card>
  );
};
