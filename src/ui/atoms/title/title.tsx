import {StyleSheet, Text} from 'react-native'
import React from 'react'

export const Title: React.FC = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        paddingVertical: 5,
    },
})


