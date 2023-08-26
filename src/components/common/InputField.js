import { TextField } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  & .MuiInputBase-input {
    color: #ffffff;
    transition: color 250ms ease-in;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      -webkit-text-fill-color: white;
      -webkit-box-shadow: 0 0 0px 50px rgb(42, 44, 54) inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  & .MuiInputLabel-root {
    color: ${({ status, theme }) => {
      if (status === 'success') {
        return theme.colors.success;
      } else if (status === 'idle') {
        return theme.colors.labelColor;
      }
    }};
    transition: color 250ms ease-in transform 250ms ease-in;
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${({ status, theme }) => {
      if (status === 'success') {
        return theme.colors.success;
      } else if (status === 'idle') {
        return '#fff';
      }
    }};
  }

  & .MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
    border-color: ${({ status, theme }) => {
      if (status === 'success') {
        return theme.colors.success;
      } else if (status === 'idle') {
        return theme.colors.white;
      }
    }};
    border-width: 1px;
  }

  & .MuiOutlinedInput-notchedOutline {
    border-color: ${({ status, theme }) => {
      if (status === 'success') {
        return theme.colors.success;
      } else if (status === 'idle') {
        return theme.colors.inputBorderColor;
      }
    }};
    transition: border-color 250ms ease-in;
  }

  & .MuiFormHelperText-root {
    margin-left: 0;
  }

  & span.MuiFormLabel-asterisk {
    color: inherit;
  }

  & label.MuiInputLabel-root.Mui-error {
    color: ${({ status, theme }) => {
      if (status === 'error') {
        return theme.colors.error;
      } else if (status === 'idle') {
        return theme.colors.labelColor;
      }
    }};
  }
  &:hover label.MuiInputLabel-root.Mui-error {
    color: ${({ status, theme }) => {
      if (status === 'error') {
        return theme.colors.error;
      } else if (status === 'idle') {
        return theme.colors.white;
      }
    }};
  }

  & .Mui-error fieldset.MuiOutlinedInput-notchedOutline {
    border-color: ${({ status, theme }) => {
      if (status === 'error') {
        return theme.colors.error;
      } else if (status === 'idle') {
        return theme.colors.inputBorderColor;
      }
    }};
  }

  &:hover fieldset.MuiOutlinedInput-notchedOutline {
    border-color: ${({ status, theme }) => {
      if (status === 'success') {
        return theme.colors.success;
      } else if (status === 'idle') {
        return theme.colors.white;
      }
    }};
  }

  &:hover .MuiInputLabel-root {
    color: ${({ status, theme }) => {
      if (status === 'success') {
        return theme.colors.success;
      } else if (status === 'idle') {
        return '#fff';
      }
    }};
  }
`;

const defineStatus = (form, name) => {
  if (!form.touched[name] || !form.values[name]) {
    return 'idle';
  } else if (Boolean(form.errors[name])) {
    return 'failed';
  } else {
    return 'success';
  }
};

const setTouched = (form, name) => {
  form.touched[name] = true;
};

export const InputField = ({ name, label, type, formik }) => {
  return (
    <StyledTextField
      required
      label={label}
      name={name}
      type={type}
      autoComplete="on"
      fullWidth
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      onClick={() => setTouched(formik, name)}
      status={defineStatus(formik, name)}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
    />
  );
};
