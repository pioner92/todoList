import {StyleSheet, View} from 'react-native'
import {Button} from '../ui/atoms/buttons/button'
import React from 'react'

type propsType = {
    labelLeftButton:string
    labelRightButton:string
    onPressLeftButton:()=>void
    onPressRightButton:()=>void
}

export const TwoButtonRow:React.FC<propsType> = ({labelLeftButton, labelRightButton, onPressLeftButton, onPressRightButton}) => {
    return (
        <View style={styles.container}>
            <Button label={labelLeftButton} onPress={onPressLeftButton}/>
            <Button label={labelRightButton} onPress={onPressRightButton}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
})
