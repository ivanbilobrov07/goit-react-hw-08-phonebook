import { Phonebook } from 'components/Phonekook(create_async_thunk)';
import { Container } from 'components/Container.styled';
import { UserCard } from 'components/UserCard';
import { Section, Wrapper } from 'pages/PhonebookPage.styled';

const PhonebookPageThunk = () => {
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

export default PhonebookPageThunk;
