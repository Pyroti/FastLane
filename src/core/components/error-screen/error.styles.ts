import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ErrorMessage = styled.Text`
  text-align: center;
  background-color: ${({ theme }) => theme.pallette.error};
`;
