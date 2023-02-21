import { MotiTransitionProp, MotiView } from 'moti'
import React, { FC, useMemo, useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { Easing } from 'react-native-reanimated'

interface Props {
    size: number
    onPress: () => void
    isActive: boolean
}

const _color = {
    active: '#2C2C2C',
    inactive: '#DCDCDC',
}

const transition: MotiTransitionProp = {
    type: 'timing',
    duration: 300,
    easing: Easing.inOut(Easing.ease)
}

const Switch:FC<Props> = ({size, onPress, isActive}) => {
    const trackWidth = useMemo(() => {
        return size * 1.5;
    }, [size]);
    const trackHeight = useMemo(() => {
        return size * 0.4;
    }, [size]);
    const knobSize = useMemo(() => {
        return size * 0.6;
    }, [size]);
    return(
        <Pressable onPress={onPress}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <MotiView
                    transition={transition}
                    animate={{
                        backgroundColor: isActive ? _color.inactive : _color.active
                    }}
                    style={{
                        position: 'absolute',
                        width: trackWidth,
                        height: trackHeight,
                        borderRadius: trackHeight / 2,
                        backgroundColor: _color.active,
                    }}
                />

                <MotiView
                    transition={transition}
                    animate={{
                        translateX: isActive ? trackWidth / 4 : - trackWidth / 4
                    }}
                    style={{
                        width: size,
                        height: size,
                        borderRadius: size / 2,
                        backgroundColor: '#fff',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <MotiView
                        transition={transition}
                        animate={{
                            width: isActive ? 0 : knobSize,
                            borderColor: isActive ? _color.active : _color.inactive
                        }}
                        style={{
                            width: knobSize,
                            height: knobSize,
                            borderRadius: knobSize / 2,
                            borderWidth: size * 0.1,
                            borderColor: _color.active,
                        }}
                    />
                </MotiView>
            </View>
        </Pressable>
    )
}

export const AnimatedSwitch = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <View style={styles.container}>
            <Switch
                onPress={()=> {
                    setIsActive((isActive)=>!isActive)
                }}
                size={60}
                isActive={isActive}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f3f3f4',
        alignItems: 'center',
        justifyContent: 'center',
    }
})