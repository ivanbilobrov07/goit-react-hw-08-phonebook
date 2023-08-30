import { Container } from 'components/Container.styled';
import { LoginForm } from 'components/LoginForm';
import {
  FormWrapper,
  Image,
  Section,
} from 'pages/RegisterPage/RegisterPage.styled';

import loginImage from 'images/registerImage.png';

const LoginPage = () => {
  return (
    <Section>
      <Container>
        <Image src={loginImage} alt="a girl searching the Net" />
        <FormWrapper>
          <LoginForm />
        </FormWrapper>
      </Container>
    </Section>
  );
};

export default LoginPage;
