import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { AnimatedSwitch, CarouselAnimation, GalleryView, LoadingAnimation, RingIndicatorPhone, ScrollAnimationEffect } from '../screens';

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

            <Tab.Screen
                name="GalleryView"
                component={GalleryView}
                options={{
                    tabBarLabel: 'GalleryView',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="view-gallery-outline" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name="ScrollAnimationEffect"
                component={ScrollAnimationEffect}
                options={{
                    tabBarLabel: 'ScrollAnimationEffect',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="scroll" color={color} size={size} />
                    )
                }}
            />

            <Tab.Screen
                name="CarouselAnimation"
                component={CarouselAnimation}
                options={{
                    tabBarLabel: 'CarouselAnimation',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="view-carousel-outline" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};