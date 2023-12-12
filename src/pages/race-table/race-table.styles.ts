import { RacesModel } from '@core/interfaces/races.interface';
import { ComponentType } from 'react';
import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallette.light};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.pallette.primary};
`;

export const RacesList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`` as never as ComponentType<FlatListProps<RacesModel>>;

export const Header = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  padding: 16px 0;
  margin-bottom: 8px;
`;

export const HeaderText = styled.Text`
  flex: 1;
  font-weight: bold;
  padding: 0 10px;
  text-align: center;
  color: ${({ theme }) => theme.pallette.text};
`;

export const Row = styled.View`
  flex-direction: row;
  border-bottom-width: 1px;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

export const Cell = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.pallette.text};
`;
