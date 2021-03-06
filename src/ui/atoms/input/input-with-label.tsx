import {StyleSheet, Text, View} from 'react-native'
import {Input, inputPropsType} from './input'
import React from 'react'

export type inputWithLabelType = {
    label:string
}

export const InputWithLabel:React.FC<inputWithLabelType & inputPropsType> = ({label, value, style, secureTextEntry, onChange}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <Input value={value} onChange={onChange} secureTextEntry={secureTextEntry} style={style}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
    },
})

