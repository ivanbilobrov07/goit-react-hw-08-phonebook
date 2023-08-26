import { Outlet } from 'react-router-dom';

import { Container } from 'components/Container.styled';
import { AppBar } from 'components/AppBar';
import { StyledHeader, StyledMain } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <AppBar />
        </Container>
      </StyledHeader>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};
