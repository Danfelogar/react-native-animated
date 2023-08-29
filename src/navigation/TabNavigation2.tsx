import React from 'react';
import {Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {ThreeDCarouselAnimation} from '../screens';

const Tab = createBottomTabNavigator();

export const TabNavigation2 = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          height: Platform.OS === 'android' ? 60 : 90,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
      initialRouteName="ThreeDCarouselAnimation">
      <Tab.Screen
        name="ThreeDCarouselAnimation"
        component={ThreeDCarouselAnimation}
        options={{
          tabBarLabel: 'RingIndicatorPhone',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="video-3d-variant"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
