import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 58%;
  width: 100%;
  max-width: 400px;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.backgroundDarkblue};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 8px;
`;

export const Image = styled.img`
  padding-top: 127px;
`;

export const Section = styled.section`
  padding-top: 60px;
  height: 100vh;
  background-color: ${props => props.theme.colors.registrationPageBackground};
`;
