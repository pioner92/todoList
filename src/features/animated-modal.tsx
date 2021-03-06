import {Animated, Dimensions, StyleSheet, View} from 'react-native'
import React from 'react'
import {useInterpolate} from '../lib/animation-hooks'
import {DarkBackground} from './dark-bg'

const height = Dimensions.get('window').height

type propsType = {
    animatedValue: Animated.Value
    isMounted: boolean
}

export const AnimatedModal: React.FC<propsType> = ({children, animatedValue, isMounted}) => {
    const interpolateY = useInterpolate(animatedValue, [0, 1], [height, 0])

    const animatedStyle = {
        transform: [
            {translateY: interpolateY},
        ],
    }

    if (!isMounted) {
        return null
    }

    return (
        <View style={styles.container}>
            <DarkBackground animatedValue={animatedValue} isMounted={isMounted}/>
            <View style={styles.modalWrapper}>
                <Animated.View style={[styles.modal, animatedStyle]}>
                    {children}
                </Animated.View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalWrapper: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#fefefe',
        borderRadius: 16,
        shadowColor: '#000',
        padding: 16,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.55,
        shadowRadius: 10.84,
        elevation: 5,
    },
})
