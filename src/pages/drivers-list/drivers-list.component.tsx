import React, { useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppRoutes, AppRoutesParamList } from '@navigators/root.navigator';
import { useNavigation } from '@react-navigation/native';
import { EmptyList } from '@core/components/empty-list';
import * as Styled from './drivers-list.styles';
import driversListSelector from '@store/selectors/drivers-list.selector';
import { getDriversListData } from '@store/thunks/getDriversListData';
import { useTypedDispatch } from '@store/store';
import { DriverModel } from '@core/interfaces/drivers.interface';
import { useTranslation } from 'react-i18next';
import { ErrorComponent } from '@core/components/error-screen';

type DriversListPageNavigationProp = NativeStackNavigationProp<AppRoutesParamList, AppRoutes.DriversList>;

const DriversListPage: React.FC = () => {
  const navigation = useNavigation<DriversListPageNavigationProp>();
  const dispatch = useTypedDispatch();
  const { isLoading, driversList, error } = useSelector(driversListSelector);
  const { t } = useTranslation('', { keyPrefix: 'drivers' });


  useEffect(() => {
    dispatch(getDriversListData());
  }, [dispatch]);

  const handleUpdate = () => {
    dispatch(getDriversListData());
  };

  const handleDriversSelect =
    (id: string, name: string) => () => {
      navigation.navigate(AppRoutes.DriverDetails, { id, name });
    };

  const handleRaceSelect =
    (id: string, name: string) => () => {
      navigation.navigate(AppRoutes.RaceTable, { id, name });
    };

  const renderItem = ({ item }: { item: DriverModel }) => (
    <Styled.Row>
      <Styled.PressableCell onPress={handleDriversSelect(item.driverId, item.familyName)}>
        <Styled.ViewRaces>{`${item.givenName} ${item.familyName}`}</Styled.ViewRaces>
      </Styled.PressableCell>
      <Styled.Cell>{item.dateOfBirth}</Styled.Cell>
      <Styled.Cell>{item.nationality}</Styled.Cell>
      <Styled.PressableCell onPress={handleRaceSelect(item.driverId, item.familyName)}>
        <Styled.ViewRaces>{t('viewRaces')}</Styled.ViewRaces>
      </Styled.PressableCell>
    </Styled.Row>
  );

  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderText>{t('viewRaces')}</Styled.HeaderText>
        <Styled.HeaderText>{t('dateOfBirth')}</Styled.HeaderText>
        <Styled.HeaderText>{t('nationality')}</Styled.HeaderText>
        <Styled.HeaderText>{t('viewRaces')}</Styled.HeaderText>
      </Styled.Header>
      <Styled.DriversList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleUpdate} />
        }
        data={driversList}
        renderItem={renderItem}
        keyExtractor={(item) => item.driverId}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<EmptyList />}
      />
    </Styled.Container>
  );
};

export default DriversListPage;
