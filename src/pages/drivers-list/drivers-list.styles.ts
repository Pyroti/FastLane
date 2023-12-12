import { ComponentType } from 'react';
import { FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { DriverModel } from '@core/interfaces/drivers.interface';

export const Container = styled.View`
  flex: 1;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.pallette.light};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.pallette.text};
`;

export const DriversList = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 8,
  },
})`` as never as ComponentType<FlatListProps<DriverModel>>;

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

export const ViewRaces = styled.Text`
  color: ${({ theme }) => theme.pallette.primary};
  text-align: center;
`;

export const Cell = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.pallette.text};
`;

export const PressableCell = styled.Pressable`
  flex: 1;
`;
