import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import { object, string } from 'yup';

import { login } from 'redux/auth/authApi';
import { selectIsAuthLoading } from 'redux/selectors';

import { InputField } from 'components/common';
import {
  InputsContainer,
  StyledLoadingButton,
  StyledTitle,
} from 'components/RegisterForm/RegisterForm.styled';

const loginSchema = object({
  email: string('Enter your email')
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),
  password: string('Enter your password')
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isRegLoading = useSelector(selectIsAuthLoading);

  const handleLoginFormSumbit = (data, { resetForm }) => {
    dispatch(login(data));
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: handleLoginFormSumbit,
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <StyledTitle>Log in</StyledTitle>
      <InputsContainer>
        <InputField name="email" type="email" label="Email" formik={formik} />
        <InputField
          name="password"
          type="password"
          label="Password"
          formik={formik}
        />
      </InputsContainer>
      <StyledLoadingButton
        fullWidth
        type="submit"
        color="primary"
        variant="contained"
        loading={isRegLoading}
      >
        <span>Log in</span>
      </StyledLoadingButton>
    </form>
  );
};
