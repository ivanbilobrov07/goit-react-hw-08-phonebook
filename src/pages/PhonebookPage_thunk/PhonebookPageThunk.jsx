import { Phonebook } from 'components/Phonekook(create_async_thunk)';
import { Container } from 'components/Container.styled';
import { Title, Wrapper } from 'pages/PhonebookPage.styled';

export const PhonebookPageThunk = () => {
  return (
    <>
      <section>
        <Container>
          <Wrapper>
            <Title>Phonebook</Title>
            <Phonebook />
          </Wrapper>
        </Container>
      </section>
    </>
  );
};
