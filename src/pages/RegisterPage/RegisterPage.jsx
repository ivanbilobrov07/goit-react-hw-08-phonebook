import { Container } from 'components/Container.styled';
import { RegisterForm } from 'components/RegisterForm';
import { FormWrapper, Image, Section } from './RegisterPage.styled';

import loginImage from 'images/registerImage.png';

const RegisterPage = () => {
  return (
    <Section>
      <Container>
        <Image src={loginImage} alt="a girl searching the Net" />
        <FormWrapper>
          <RegisterForm />
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default RegisterPage;
