import React from 'react'
import {StyleSheet, Text, TextStyle} from 'react-native'


type propsType = {
    title:string
    style?:TextStyle
}
export const ErrorTitle:React.FC<propsType> = ({title, style}) => {
    return (
        <Text style={[styles.title, style]}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: 'red',
        fontSize: 10,
    },
})

