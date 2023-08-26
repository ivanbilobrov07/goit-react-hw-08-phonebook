import { useSelector } from 'react-redux';
import { StyledList, StyledNav, StyledNavLink } from './Navigation.styled';
import { selectIsLoggenIn } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggenIn);

  return (
    <StyledNav>
      <StyledList>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <StyledNavLink to="phonebook_thunk">
                Phonebook by thunk
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="phonebook_RTK">Phonebook by RTK</StyledNavLink>
            </li>
          </>
        )}
      </StyledList>
    </StyledNav>
  );
};
