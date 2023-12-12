import React from 'react';
import * as Styled from './error.styles';

interface ErrorComponentProps {
  errorMessage: string
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({errorMessage}) => {
  return (
    <Styled.Container>
      <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
    </Styled.Container>
  );
};

export default ErrorComponent;
