import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { faker } from '@faker-js/faker';
import {useRef} from 'react';

import { AVATAR_SIZE, ITEM_SIZE } from '../../helpers';


faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: faker.image.cats(),
        name: faker.internet.userName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
    };
});

const BG_IMG = `https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500`
const SPACING = 20;

export const ScrollAnimationEffect = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
        <StatusBar hidden/>
        <Image
          source={{ uri: BG_IMG }}
          style={StyleSheet.absoluteFillObject}
          blurRadius={80}
        />
        <Animated.FlatList
          data={DATA}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: {y: scrollY } } }],
            { useNativeDriver: true }
          )}
          contentContainerStyle={{ padding: SPACING, paddingTop: StatusBar.currentHeight || 42}}
          keyExtractor={item => item.key}
          renderItem={({item, index})=>{
            const inputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 2)
            ]

            const opacityInputRange = [
              -1,
              0,
              ITEM_SIZE * index,
              ITEM_SIZE * (index + 1)
            ]

            const scale = scrollY.interpolate({
              inputRange,
              outputRange: [1,1,1,0]
            })
            const opacity = scrollY.interpolate({
              inputRange: opacityInputRange,
              outputRange: [1,1,1,0]
            })

            return(
              <Animated.View style={{
                flex: 1,
                flexDirection: 'row',
                padding: SPACING,
                marginBottom: SPACING,
                backgroundColor: 'rgba(255, 255,255, 0.8)',
                borderRadius: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
              shadowOpacity: 0.3,
              shadowRadius: 20,
              opacity,
              transform: [{scale}]
              }}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width:  AVATAR_SIZE, height: AVATAR_SIZE, borderRadius: AVATAR_SIZE, marginRight: SPACING / 2 }}
                />
                <View>
                  <Text style={{ fontSize: 22, fontWeight: '700' }} >{item.name}</Text>
                  <Text style={{ fontSize: 16, opacity: 0.7 }} >{item.jobTitle}</Text>
                  <Text style={{ fontSize: 14, opacity: 0.8, color: '#0099cc' }} >{item.email}</Text>
                </View>
              </Animated.View>
            )
          }}
        />
    </View>
  )
}