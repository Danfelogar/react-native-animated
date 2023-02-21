import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { MotiView } from 'moti';
import { Easing } from 'react-native-reanimated';

const _color = '#6E01EF';
const _size = 100;

export function RingIndicatorPhone() {
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={[styles.dot, styles.center]}>
        {
          [...Array(3).keys()].map((index) =>{
            return(
              <MotiView
                from={{ opacity: 0.7, scale: 1 }}
                animate={{ opacity: 0, scale: 4 }}
                transition={{
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  delay: index * 400,
                  loop: true,
                  repeatReverse: false,
                }}
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
              />
            )
          })
        }
        <Icon name='phone-outgoing' size={32} color='#fff' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  dot:{
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },
  center:{ alignItems: 'center', justifyContent: 'center' }
})