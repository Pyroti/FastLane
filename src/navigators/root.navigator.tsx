import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DriversListPage } from '@pages/drivers-list';
import { DriverDetailsPage } from '@pages/driver-details';
import { RaceTablePage } from '@pages/race-table';

export enum AppRoutes {
  DriversList = '[AppRoutes] DriversList',
  DriverDetails = '[AppRoutes] DriverDetails',
  RaceTable = '[AppRoutes] RaceTable',
}

export type AppRoutesParamList = {
  [AppRoutes.DriversList]: {};
  [AppRoutes.DriverDetails]: {
    id: string;
    name: string;
  };
  [AppRoutes.RaceTable]: {
    id: string;
    name: string;
  };
};

const RootStack = createNativeStackNavigator<AppRoutesParamList>();

export const RootNavigator = () => {
  const {t} = useTranslation();

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          options={{
            title: t('drivers.title'),
          }}
          name={AppRoutes.DriversList}
          component={DriversListPage}
        />
        <RootStack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name={AppRoutes.DriverDetails}
          component={DriverDetailsPage}
        />
        <RootStack.Screen
          options={({ route }) => ({ title: route.params.name })}
          name={AppRoutes.RaceTable}
          component={RaceTablePage}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
