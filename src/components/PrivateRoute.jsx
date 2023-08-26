import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggenIn, selectIsRefreshing } from 'redux/selectors';

export const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggenIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const location = useLocation();

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to="/login" state={location} /> : component;
};
