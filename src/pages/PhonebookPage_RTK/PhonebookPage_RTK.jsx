import { Phonebook } from 'components/Phonebook(RTK_query)';
import { Container } from 'components/Container.styled';
import { Title, Wrapper } from 'pages/PhonebookPage.styled';

export const PhonebookPageRTK = () => {
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
