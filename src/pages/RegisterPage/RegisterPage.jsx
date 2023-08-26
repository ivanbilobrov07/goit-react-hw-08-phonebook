import { Container } from 'components/Container.styled';
import { RegisterForm } from 'components/RegisterForm';
import { FormWrapper } from './RegisterPage.styled';

const RegisterPage = () => {
  return (
    <section>
      <Container>
        <FormWrapper>
          <RegisterForm />
        </FormWrapper>
      </Container>
    </section>
  );
};

export default RegisterPage;
