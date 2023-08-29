import 'react-native-reanimated';
import 'react-native-gesture-handler';

import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {DrawerNavigation} from './src/navigation';

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </AppState>
  );
};

const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return <View style={{flex: 1}}>{children}</View>;
};

export default App;
