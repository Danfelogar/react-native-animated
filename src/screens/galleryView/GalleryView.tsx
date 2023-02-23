import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { API_KEY, API_URL, IMAGE_SIZE, SPACING } from '../../helpers';

const { width, height } = Dimensions.get('screen');

const fetchImagesFromPexels = async () => {
    const data = await fetch(API_URL, {
        headers: {
            'Authorization': API_KEY
        }
    })

    const { photos } = await data.json()

    return photos
}

export const GalleryView = () => {
    const [imgs, setImgs] = useState(null);
    const topRef = useRef<FlatList<any>>(null);
    const thumbRef = useRef<FlatList<any>>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToActiveIndex = (index: number) =>{
        setActiveIndex(index)
        //scroll flatList
        topRef?.current?.scrollToOffset({
            offset: index * width,
            animated: true,
        })
        if(index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2){
            thumbRef?.current?.scrollToOffset({
                offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
                animated: true,
            })
        }else{
            thumbRef?.current?.scrollToOffset({
                offset: 0,
                animated: true,
            })
        }
    }

    useEffect(() => {
      const fetchImages = async () =>{
        const images = await fetchImagesFromPexels();
        setImgs(images);
      }
      fetchImages()
    }, [])

    if(!imgs){
        return(
            <Text>Loading...</Text>
        )
    }

  return (
    <View style={{flex: 1, backgroundColor:'#000'}}>
      <FlatList
        ref={topRef}
        data={imgs}
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev=>{
            scrollToActiveIndex(Math.floor(ev.nativeEvent.contentOffset.x / width))
        }}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
            return(
                <View style={{ width, height }}>
                    <Image
                        source={{ uri: item.src.portrait }}
                        style={[ StyleSheet.absoluteFillObject ]}
                    />
                </View>
            )
        }}
      />
      <FlatList
        ref={thumbRef}
        data={imgs}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ position: 'absolute', bottom: 120 }}
        contentContainerStyle={{ paddingHorizontal: SPACING }}
        renderItem={({item, index}) => {
            return(
                <TouchableOpacity activeOpacity={0.8} onPress={()=> scrollToActiveIndex(index)}>
                    <Image
                        source={{ uri: item.src.portrait }}
                        style={{
                            width: IMAGE_SIZE,
                            height: IMAGE_SIZE,
                            borderRadius: 12,
                            marginRight: SPACING,
                            borderWidth: 2,
                            borderColor: activeIndex === index ? '#fff'  : 'transparent'
                        }}
                    />
                </TouchableOpacity>
            )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})