import {StyleSheet, TextInput, ViewStyle} from 'react-native'
import React from 'react'

export type inputPropsType = {
    value:string
    onChange:(text:string)=>void
    style?:ViewStyle
    secureTextEntry?:boolean
}

export const Input:React.FC<inputPropsType> = ({value, onChange, style, secureTextEntry=false}) => {
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            secureTextEntry={secureTextEntry}
            style={[styles.input, style]}
        />
    )
}

const styles = StyleSheet.create({

    input: {
        borderRadius: 6,
        borderWidth: 0.5,
        borderColor: '#9a9a9a',
        paddingVertical: 10,
        paddingHorizontal: 10,
    },

})
