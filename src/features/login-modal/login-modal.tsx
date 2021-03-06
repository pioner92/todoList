import {ActivityIndicator, StyleSheet, View} from 'react-native'
import React, {useState} from 'react'
import {useStore} from 'effector-react'
import {
    $isMountedLoginModal,
    $loginModalAnimatedValue,
    $modalLoginInputValue,
    $modalPasswordInputValue,
    hideLoginModal,
    setModalLoginInputValue,
    setModalPasswordInputValue,
} from './models/models'
import {login} from '../../api/rest/login'
import {setIsAuth} from '../../models/models'
import {AnimatedModal} from '../animated-modal'
import {InputWithLabel} from '../../ui/atoms/input/input-with-label'
import {ErrorTitle} from '../../ui/atoms/title/error-title'
import {Title} from '../../ui/atoms/title/title'
import {TwoButtonRow} from "../two-button-row";


export const LoginModal = () => {
    const loginValue = useStore($modalLoginInputValue)
    const passwordValue = useStore($modalPasswordInputValue)
    const animatedValue = useStore($loginModalAnimatedValue)
    const isMounted = useStore($isMountedLoginModal)

    const [isStartedValidationFields, setIsStartedValidationFields] = useState(false)
    const [isLoginError, setIsLoginError] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)


    const validationFields = (text:string) => {
        return text.length === 0
    }

    const onPressLogin = async () => {
        setIsStartedValidationFields(true)

        if (!loginValue && !passwordValue ) {
            return
        }

        setIsLoaded(true)
        const res = await login({login: loginValue, password: passwordValue})
        setIsLoaded(false)

        if (res?.message.token) {
            hideLoginModal()
            setIsAuth(true)
            resetStatuses()
        } else {
            setIsLoginError(true)
        }
    }

    const onPressCancel = () => {
        hideLoginModal()
        resetStatuses()
    }

    const resetStatuses = () => {
        setIsLoginError(false)
        setIsStartedValidationFields(false)
    }

    if (!isMounted) {
        return null
    }

    return (
        <AnimatedModal isMounted={isMounted} animatedValue={animatedValue}>
            <View style={styles.container}>
                <Title>Login</Title>
                <View style={{height: 95}}>
                    <InputWithLabel label='Login' value={loginValue} onChange={setModalLoginInputValue}/>
                    {isStartedValidationFields && validationFields(loginValue) ?
                        <ErrorTitle title={'This field is required'}/>:
                        null
                    }
                </View>
                <View style={{height: 95}}>
                    <InputWithLabel label='Password' value={passwordValue} onChange={setModalPasswordInputValue}/>
                    {isStartedValidationFields && validationFields(passwordValue) ?
                        <ErrorTitle title={'This field is required'}/>:
                        null
                    }
                </View>
                <ErrorTitle title={isLoginError ? 'Incorrect username or password':''}/>
                <TwoButtonRow labelLeftButton='Cancel' labelRightButton='Login' onPressLeftButton={onPressCancel} onPressRightButton={onPressLogin}/>
                <ActivityIndicator animating={isLoaded} hidesWhenStopped={true} style={{position: 'absolute', alignSelf: 'center', top: 100}} size={'large'}/>
            </View>
        </AnimatedModal>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 280,
    }
})
