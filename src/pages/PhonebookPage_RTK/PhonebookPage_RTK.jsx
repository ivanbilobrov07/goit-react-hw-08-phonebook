import { Phonebook } from 'components/Phonebook(RTK_query)';
import { Container } from 'components/Container.styled';
import { UserCard } from 'components/UserCard';
import { Section, Wrapper } from 'pages/PhonebookPage.styled';

const PhonebookPageRTK = () => {
  return (
    <>
      <Section>
        <Container>
          <Wrapper>
            <UserCard />
            <Phonebook />
          </Wrapper>
        </Container>
      </Section>
    </>
  );
};

export default PhonebookPageRTK;
