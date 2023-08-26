import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import { object, string } from 'yup';

import { register } from 'redux/auth/authApi';
import { selectIsAuthLoading } from 'redux/selectors';

import {
  InputsContainer,
  StyledLoadingButton,
  StyledTitle,
} from './RegisterForm.styled';
import { InputField } from 'components/common';

const registrationSchema = object({
  name: string()
    .trim()
    .required('Name is required')
    .min(2, 'Name should be of minimum 2 characters length')
    .matches('^[a-zA-Z]+$', 'Name must contain only letters'),
  email: string('Enter your email')
    .trim()
    .email('Enter a valid email')
    .required('Email is required'),
  password: string('Enter your password')
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isRegLoading = useSelector(selectIsAuthLoading);

  const handleRegFormSumbit = (data, { resetForm }) => {
    dispatch(register(data));
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: registrationSchema,
    onSubmit: handleRegFormSumbit,
  });

  return (
    <form autoComplete="off" onSubmit={formik.handleSubmit}>
      <StyledTitle>Registration</StyledTitle>
      <InputsContainer>
        <InputField name="name" type="text" label="Name" formik={formik} />
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
        <span>Sign up</span>
      </StyledLoadingButton>
    </form>
  );
};
