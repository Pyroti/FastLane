import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from './src/theme';
import { RootNavigator } from './src/navigators/root.navigator';
import i18n from './src/core/i18n';
import { ErrorBoundary } from './src/core/components/error-boundary';
import { store, persist } from '@store/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <>
    <StatusBar hidden translucent backgroundColor="transparent" />
    <ThemeProvider theme={defaultTheme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
        <I18nextProvider i18n={i18n}>
          <ErrorBoundary>
            <RootNavigator />
          </ErrorBoundary>
        </I18nextProvider>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>
);

export default App;
