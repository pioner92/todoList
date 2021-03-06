import {InputWithLabel, inputWithLabelType} from './input-with-label'
import {ErrorTitle} from '../title/error-title'
import {StyleSheet, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {inputPropsType} from './input'


type propsType = {
    emailValidate?: boolean
    isStartedValidate: boolean
}


export const InputWithValidation: React.FC<inputWithLabelType & inputPropsType & propsType> = ({isStartedValidate, value, onChange, label, secureTextEntry, style, emailValidate = false}) => {
    const [isVisibleErrorText, setIsVisibleErrorText] = useState(false)

    const emailValidation = (email: string) => {
        const re = /\S+@\S+\.\S+/
        return emailValidate && isVisibleErrorText && !re.test(email)
    }

    const requiredValidation = (text: string) => {
        return isVisibleErrorText && text.length === 0
    }

    useEffect(() => {
        if (isStartedValidate) {
            setIsVisibleErrorText(true)
        } else {
            setIsVisibleErrorText(false)
        }
    }, [isStartedValidate])


    return (
        <View style={styles.inputWrapper}>
            <InputWithLabel label={label} value={value} onChange={onChange}/>
            {isStartedValidate && requiredValidation(value) ?
                <ErrorTitle title='This field is required'/> :
                isStartedValidate && emailValidation(value) ?
                    <ErrorTitle title='Invalid email address'/> :
                    null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    inputWrapper: {
        height: 90,
    },
})
