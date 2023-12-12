import styled from 'styled-components/native';

export const Content = styled.View`
  display: flex;
  flex-direction: column;
  margin: 12px;
  justify-content: center;
`;

export const ErrorText = styled.Text`
  font-size: 16px;
  margin-bottom: 8px;
  text-align: center;
  color: ${({ theme }) => theme.pallette.text};
`;
