import { useSelector } from 'react-redux';
import { EmailText, Image, NameText, Wrapper } from './UserCard.styled';

import userImage from 'images/userImage.png';
import { selectUserData } from 'redux/selectors';

export const UserCard = () => {
  const { name, email } = useSelector(selectUserData);

  return (
    <Wrapper>
      <Image src={userImage} alt="Your avatar" />

      <NameText>{name}</NameText>
      <EmailText>{email}</EmailText>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
        reiciendis cum labore doloremque saepe consectetur! Ea beatae vitae
        quaerat similique ducimus repellendus in consequatur culpa! Repellat ut
        assumenda et odit.
      </p>
    </Wrapper>
  );
};
