import { Container } from 'components/Container.styled';
import {
  ContentWrapper,
  HomeText,
  HomeTitle,
  Section,
} from './HomePage.styled';

import homeImage from 'images/homeImage.png';

const HomePage = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <div>
            <HomeTitle>Phonebook</HomeTitle>
            <HomeText>
              Welcome to your ultimate contact management solution. Streamline
              your connections with our intuitive and organized digital contact
              book, ensuring you never lose touch again.
            </HomeText>
          </div>

          <img src={homeImage} alt="A girl searching the Net" />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default HomePage;
