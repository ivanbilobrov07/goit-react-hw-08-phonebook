import { Button } from '@mui/material';
import {
  IconWrapper,
  SocialItemContent,
  SocialList,
  SocialTitle,
  StyledAddress,
  StyledButtonGroup,
} from './ContactCard.styled';
import { theme } from 'constants';
import { useState } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const fields = {
  CONTACTS: 'contacts',
  WORK: 'work',
  ABOUT: 'about',
};

export const ContactCardOptions = ({ name, number }) => {
  const [selectedField, setSelectedField] = useState(fields.CONTACTS);

  const isBtnActive = name => {
    return selectedField === name
      ? { backgroundColor: theme.colors.success }
      : null;
  };

  return (
    <>
      <div style={{ display: 'flex', marginBottom: '40px' }}>
        <StyledButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            style={isBtnActive(fields.CONTACTS)}
            onClick={() => setSelectedField(fields.CONTACTS)}
          >
            Contact
          </Button>
          <Button
            style={isBtnActive(fields.WORK)}
            onClick={() => setSelectedField(fields.WORK)}
          >
            Work
          </Button>
          <Button
            style={isBtnActive(fields.ABOUT)}
            onClick={() => setSelectedField(fields.ABOUT)}
          >
            About
          </Button>
        </StyledButtonGroup>
      </div>
      {selectedField === fields.CONTACTS && (
        <StyledAddress>
          <SocialList>
            <li>
              <SocialItemContent>
                <div>
                  <SocialTitle>Phone number</SocialTitle>
                  <p>{number}</p>
                </div>
                <IconWrapper color={theme.colors.successOpacity}>
                  <BsFillTelephoneFill size={22} color={theme.colors.success} />
                </IconWrapper>
              </SocialItemContent>
            </li>
            <li>
              <SocialItemContent>
                <div>
                  <SocialTitle>Email Address</SocialTitle>
                  <p>lorem@gmail.com</p>
                </div>
                <IconWrapper color={theme.colors.warningOpacity}>
                  <MdEmail size={22} color={theme.colors.warning} />
                </IconWrapper>
              </SocialItemContent>
            </li>
          </SocialList>
        </StyledAddress>
      )}
      {(selectedField === fields.ABOUT || selectedField === fields.WORK) && (
        <p style={{ marginBottom: '30px' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, nisi?
          Nihil ex cupiditate dignissimos hic omnis vel. Quaerat consequatur
          saepe sed sunt sint fugiat deserunt est sequi magnam! Quis, iure?
        </p>
      )}
    </>
  );
};
