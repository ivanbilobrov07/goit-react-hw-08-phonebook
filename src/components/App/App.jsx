import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { refreshUser } from 'redux/auth/authApi';

import HomePage from 'pages/HomePage/HomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import { PhonebookPageRTK } from 'pages/PhonebookPage_RTK';
import { PhonebookPageThunk } from 'pages/PhonebookPage_thunk';

import { Layout } from 'components/Layout';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { selectIsRefreshing } from 'redux/selectors';
import { Spinner } from 'components/Spinner';
import 'react-toastify/dist/ReactToastify.css';

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

      <ToastContainer />
    </>
  );
};
