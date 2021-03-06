import {Animated, Keyboard, StyleSheet} from 'react-native'
import React from 'react'
import {useInterpolate} from '../lib/animation-hooks'


type propsType = {
    animatedValue: Animated.Value
    isMounted:boolean
}

export const DarkBackground:React.FC<propsType> = ({animatedValue, isMounted}) => {
    const interpolateOpacity = useInterpolate(animatedValue, [0, 1], [0, 0.5])

    const animatedStyle = {
        opacity: interpolateOpacity,
    }

    if (!isMounted) {
        return null
    }
    return (
        <Animated.View onTouchStart={()=>Keyboard.dismiss()} style={[styles.container, animatedStyle]}/>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        position: 'absolute',
        backgroundColor: '#000',
    },
})
