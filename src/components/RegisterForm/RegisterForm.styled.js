import { LoadingButton } from '@mui/lab';
import styled from 'styled-components';

export const StyledTitle = styled.h2`
  margin-bottom: 30px;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const StyledLoadingButton = styled(LoadingButton)`
  & .MuiLoadingButton-loadingIndicator {
    color: ${props => props.theme.colors.white};
  }
`;
