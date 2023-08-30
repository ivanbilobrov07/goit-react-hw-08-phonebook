import { ButtonGroup } from '@mui/material';
import styled from 'styled-components';

export const StyledButtonGroup = styled(ButtonGroup)`
  margin: 0 auto;

  & .MuiButtonBase-root {
    border-color: #555555;
    color: #000;
    background-color: #eee;
  }

  & .MuiButtonBase-root:hover {
    background-color: ${props => props.theme.colors.success};
  }

  & button.MuiButtonGroup-grouped:not(:last-of-type) {
    border-color: #555555;
  }
`;

export const StyledAddress = styled.address`
  display: block;
  margin-bottom: 30px;
`;

export const SocialList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SocialItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialTitle = styled.p`
  margin-bottom: 3px;
  color: #7c7c7c;
`;

export const IconWrapper = styled.span`
  display: flex;
  width: 43.656px;
  height: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  background-color: ${props => props.color};
`;
