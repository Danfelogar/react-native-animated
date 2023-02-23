import React, { useRef } from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { imageH, imageW, width } from '../../helpers';

const data = [
  'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
  'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'

];

export const CarouselAnimation = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  // const handleScroll = (event: any) => {
  //   console.log(event.nativeEvent.contentOffset.x);
  // };
  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <StatusBar hidden />
      <View style={StyleSheet.absoluteFillObject}>
        {
          data.map((image, idx)=>{
            const inputRange = [
              (idx - 1) * width,
              idx * width,
              (idx + 1) * width,
            ]

            const opacity = scrollX.interpolate({
              inputRange,
              outputRange:[0,1,0]
            })
            return(
              <Animated.Image
                source={{ uri: image}}
                key={`img-${idx}`}
                style={[StyleSheet.absoluteFillObject, { opacity }]}
                blurRadius={50}
              />
            )
          })
        }
      </View>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: {x: scrollX } } }],
          // { useNativeDriver: true, listener: handleScroll }
          { useNativeDriver: true }
        )}
        keyExtractor={(_, index)=> index.toString()}
        horizontal
        pagingEnabled
        renderItem={({item})=>{
          return(
            <View style={{
              width,
              justifyContent: 'center',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.5,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowRadius: 20
              }}>
              <Image
                source={{ uri: item}}
                style={{
                  width: imageW,
                  height: imageH,
                  resizeMode: 'cover',
                  borderRadius: 16,
                }}
              />
            </View>
          )
        }}
      />
    </View>
  )
}