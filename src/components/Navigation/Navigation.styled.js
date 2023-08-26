import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledNav = styled.nav`
  padding: 20px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.blueBackground};
  color: black;

  &.active {
    background-color: ${props => props.theme.colors.blueText};
  }
`;
