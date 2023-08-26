import { useSelector } from 'react-redux';

import { selectIsLoggenIn } from 'redux/selectors';

import { AuthNav } from 'components/AuthNav';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';
import { AppBarWrapper } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggenIn);

  return (
    <AppBarWrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBarWrapper>
  );
};
