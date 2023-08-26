import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggenIn } from 'redux/selectors';

export const RestrictedRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  const { state } = useLocation();

  return isLoggedIn ? <Navigate to={state ? state : '/'} /> : component;
};
