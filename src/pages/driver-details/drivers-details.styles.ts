import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.pallette.light};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.pallette.primary};
`;

export const TitleName = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.pallette.gray};
`;

export const TitleLastName = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.pallette.text};
`;

export const TitleInfo = styled.Text`
  font-size: 18px;
  margin-top: 40px;
  color: ${({ theme }) => theme.pallette.gray};
`;

export const DescriptionTitle = styled.Text`
  font-size: 14px;
  margin-top: 20px;
  color: ${({ theme }) => theme.pallette.gray};
`;

export const DescriptionInfo = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  color: ${({ theme }) => theme.pallette.text};
`;

export const WikipediaLink = styled.Pressable`
`;

export const DescriptionLinkInfo = styled(DescriptionInfo)`
  color: ${({ theme }) => theme.pallette.primary};
`;
