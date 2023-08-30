import { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';

import { Container } from 'components/Container.styled';
import { AppBar } from 'components/AppBar';
import { StyledHeader } from './Layout.styled';
import { Spinner } from 'components/Spinner';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <AppBar />
        </Container>
      </StyledHeader>
      <main>
        <Suspense fallback={<Spinner position="center" />}>
          <Outlet />
        </Suspense>
      </main>

      <ToastContainer />
    </>
  );
};
