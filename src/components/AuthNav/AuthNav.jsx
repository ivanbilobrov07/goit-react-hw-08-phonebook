import {
  StyledList,
  StyledNavLink,
} from 'components/Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <StyledList>
      <li>
        <StyledNavLink to="register">Sign up</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="login">Log in</StyledNavLink>
      </li>
    </StyledList>
  );
};
