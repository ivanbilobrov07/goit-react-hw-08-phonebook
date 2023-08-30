import styled from 'styled-components';

export const Image = styled.img``;

export const Section = styled.section`
  padding-top: 120px;
  height: 100vh;
  background-color: ${props => props.theme.colors.homePageBackground};
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HomeTitle = styled.h1`
  margin-bottom: 40px;
  padding-top: 80px;
  font-family: 'Paciffico', sans-serif;
  font-size: 100px;
  color: ${props => props.theme.colors.white};
`;

export const HomeText = styled.p`
  max-width: 570px;
  font-size: 40px;
  color: ${props => props.theme.colors.white};
`;
