import { Button } from '@mui/material';
import styled from 'styled-components';

export const OuterWrapper = styled.div`
  flex-grow: 1;
  border-right: 3px solid rgba(154, 154, 154, 0.09);
  border-bottom: 3px solid rgba(154, 154, 154, 0.09);
`;

export const InnerWrapper = styled.div`
  position: relative;
  width: 280px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  position: fixed;
  top: 20%;
  width: 280px;
`;

export const InfoWrapper = styled.div`
  padding: 70px 0 30px 0;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 100px;
  margin: 0 auto 5px;
`;

export const StyledDelButton = styled(Button)`
  &.MuiButtonBase-root {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 10px;
  }
`;
