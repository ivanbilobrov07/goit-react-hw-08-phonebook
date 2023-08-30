import styled from 'styled-components';

export const StyledList = styled.ul`
  flex-basis: 70%;
  padding: 11px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 22px;
  border: 3px solid rgba(154, 154, 154, 0.09);
  border-top: 0;
`;

export const StyledItem = styled.li`
  position: relative;
  border-radius: 10px;
  border: 0.5px solid rgba(137, 137, 137, 0.43);
  cursor: pointer;

  ${({ generateLetter }) => {
    if (generateLetter) {
      return `
        margin-top: 20px;

        &::before {
          content: '${generateLetter}';
          position: absolute;
          top: -35px;
              padding: 3px 0px 3px 25px;
    font-size: 18px;
    right: -21px;
    font-weight: 500;
          left: -21px;
          background-color: aqua;
        }

        &:first-child{
          margin-top: 22.6px;
        }
      `;
    }
  }}
`;

export const MessageWrapper = styled.div`
  flex-basis: 70%;
  padding: 11px 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid rgba(154, 154, 154, 0.09);
  border-top: 0;
`;
