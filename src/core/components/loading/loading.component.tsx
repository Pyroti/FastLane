import React from 'react';
import { ActivityIndicator } from 'react-native';
import * as Styled from './loading.styles';

const Loading: React.FC = () => {
  return (
    <Styled.Container>
      <ActivityIndicator />
    </Styled.Container>
  );
};

export default Loading;
