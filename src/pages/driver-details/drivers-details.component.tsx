import React, { useEffect } from 'react';
import { Linking } from 'react-native';
import { AppRoutes, AppRoutesParamList } from '@navigators/root.navigator';
import { RouteProp, useRoute } from '@react-navigation/native';
import * as Styled from './drivers-details.styles';
import { useTypedDispatch } from '@store/store';
import driverDetailsSelector from '@store/selectors/driver-details.selector';
import { useSelector } from 'react-redux';
import { getDriverDetailsData } from '@store/thunks/getDriverDetailsData';
import { findAge } from '@core/utils/find-age.util';
import { Loading } from '@core/components/loading';
import { useTranslation } from 'react-i18next';
import { ErrorComponent } from '@core/components/error-screen';

type DriverDetailsPageNavigationProp = RouteProp<AppRoutesParamList, AppRoutes.DriverDetails>;
const DriverDetailsPage: React.FC = () => {
  const dispatch = useTypedDispatch();
  const { params } = useRoute<DriverDetailsPageNavigationProp>();
  const { isLoading, driverDetails, error } = useSelector(driverDetailsSelector);
  const { t } = useTranslation('', { keyPrefix: 'drivers' });

  useEffect(() => {
    dispatch(getDriverDetailsData(params.id));
  }, [dispatch, params.id]);

  const openBrowser = () => {
    Linking.openURL(driverDetails?.url).catch(err => console.error("Couldn't load page", err));
  };


  if (error) {
    return <ErrorComponent errorMessage={error} />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Styled.Container>
      <Styled.TitleName>{driverDetails?.givenName}</Styled.TitleName>
      <Styled.TitleLastName>{driverDetails?.familyName}</Styled.TitleLastName>
      <Styled.TitleInfo>{t('basicInformation')}</Styled.TitleInfo>
      <Styled.DescriptionTitle>{t('dateOfBirth')}</Styled.DescriptionTitle>
      <Styled.DescriptionInfo>{`${driverDetails?.dateOfBirth} (${findAge(driverDetails?.dateOfBirth)} ${t('yearsOld')})`}</Styled.DescriptionInfo>
      <Styled.DescriptionTitle>{t('nationality')}</Styled.DescriptionTitle>
      <Styled.DescriptionInfo>{driverDetails?.nationality}</Styled.DescriptionInfo>
      <Styled.DescriptionTitle>{t('wikipedia')}</Styled.DescriptionTitle>
      <Styled.WikipediaLink onPress={openBrowser}>
        <Styled.DescriptionLinkInfo>{driverDetails?.url}</Styled.DescriptionLinkInfo>
      </Styled.WikipediaLink>
    </Styled.Container>
  );
};

export default DriverDetailsPage;
