import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/authApi';
import { selectUserData } from 'redux/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <p>Welcome, {userData.email}</p>
      <Button variant="contained" onClick={logoutUser}>
        Logout
      </Button>
    </div>
  );
};
