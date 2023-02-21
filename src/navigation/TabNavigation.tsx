import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

import { AnimatedSwitch, LoadingAnimation, RingIndicatorPhone } from '../screens';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
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
            initialRouteName="RingIndicatorPhone"
        >
            <Tab.Screen
                name="RingIndicatorPhone"
                component={RingIndicatorPhone}
                options={{
                    tabBarLabel: 'RingIndicatorPhone',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="phone" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name="LoadingAnimation"
                component={LoadingAnimation}
                options={{
                    tabBarLabel: 'LoadingAnimation',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="loading1" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name="AnimatedSwitch"
                component={AnimatedSwitch}
                options={{
                    tabBarLabel: 'AnimatedSwitch',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name="switch" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};