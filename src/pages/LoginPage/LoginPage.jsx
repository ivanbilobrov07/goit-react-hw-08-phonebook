import { Container } from 'components/Container.styled';
import { LoginForm } from 'components/LoginForm';
import { FormWrapper } from './LoginPage.styled';

const LoginPage = () => {
  return (
    <section>
      <Container>
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </Container>
    </section>
  );
};

export default LoginPage;
