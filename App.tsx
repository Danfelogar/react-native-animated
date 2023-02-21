import 'react-native-reanimated'
import 'react-native-gesture-handler'

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {TabNavigation} from './src/navigation';
import { View } from 'react-native';

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <View style={{ flex: 1 }}>
      {children}
    </View>
  );
};

export default App;
