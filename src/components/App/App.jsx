import { lazy } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from 'redux/auth/authApi';

import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { selectIsRefreshing } from 'redux/selectors';
import { Spinner } from 'components/Spinner';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const PhonebookPageRTK = lazy(() => import('pages/PhonebookPage_RTK'));
const PhonebookPageThunk = lazy(() => import('pages/PhonebookPage_thunk'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Spinner position="center" />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <RestrictedRoute component={<RegisterPage />}></RestrictedRoute>
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute component={<LoginPage />}></RestrictedRoute>
              }
            />
            <Route
              path="phonebook_thunk"
              element={
                <PrivateRoute component={<PhonebookPageThunk />}></PrivateRoute>
              }
            />
            <Route
              path="phonebook_RTK"
              element={
                <PrivateRoute component={<PhonebookPageRTK />}></PrivateRoute>
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
};
