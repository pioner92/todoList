import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native'
import React from 'react'


type propsType = {
    style?:ViewStyle
    label:string
    onPress:()=>void
}

export const Button:React.FC<propsType> = ({style, label, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#888888',
        width: 100,
        height: 30,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        color: 'white',
    },

})
