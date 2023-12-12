import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { AppRoutes, AppRoutesParamList } from '@navigators/root.navigator';
import { RouteProp, useRoute } from '@react-navigation/native';
import * as Styled from './race-table.styles';
import { useTypedDispatch } from '@store/store';
import { useSelector } from 'react-redux';
import { getRaceTableData } from '@store/thunks/getRaceTableData';
import raceTableSelector from '@store/selectors/race-table.selector';
import { RacesModel } from '@core/interfaces/races.interface';
import { Loading } from '@core/components/loading';
import { useTranslation } from 'react-i18next';

type RaceTablePageNavigationProp = RouteProp<AppRoutesParamList, AppRoutes.RaceTable>;

const RaceTablePage: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { params } = useRoute<RaceTablePageNavigationProp>();
  const { isLoading, raceTable } = useSelector(raceTableSelector);
  const {t} = useTranslation('', {keyPrefix: 'races'});

  useEffect(() => {
    dispatch(getRaceTableData(params.id));
  }, [dispatch, params.id]);

  const renderItem = ({ item }: { item: RacesModel }) => (
    <Styled.Row>
      <Styled.Cell>
        <Text>{item.season}</Text>
      </Styled.Cell>
      <Styled.Cell>
        <Text>{item.round}</Text>
      </Styled.Cell>
      <Styled.Cell>
        <Text>{item.raceName}</Text>
      </Styled.Cell>
      <Styled.Cell>
        <Text>{item.Results[0].position}</Text>
      </Styled.Cell>
    </Styled.Row>
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.HeaderText>{t('season')}</Styled.HeaderText>
        <Styled.HeaderText>{t('round')}</Styled.HeaderText>
        <Styled.HeaderText>{t('raceName')}</Styled.HeaderText>
        <Styled.HeaderText>{t('position')}</Styled.HeaderText>
      </Styled.Header>
      <Styled.RacesList
        data={raceTable}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.date}
        renderItem={renderItem}
      />
    </Styled.Container>
  );
};

export default RaceTablePage;
