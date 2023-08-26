import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.backgroundDarkblue};
  color: ${({ theme }) => theme.colors.textLight};
  border-radius: 8px;
`;
