import {createEvent, createStore} from 'effector'
import {Animated} from 'react-native'
import {startAnimation} from '../../edit-task-modal/models/models'

export const setModalLoginInputValue = createEvent<string>()
export const setModalPasswordInputValue = createEvent<string>()

export const showLoginModal = createEvent()
export const hideLoginModal = createEvent()
export const setIsMountedLoginModal = createEvent<boolean>()

export const $modalLoginInputValue = createStore('')
    .on(setModalLoginInputValue, (state, payload) => payload)
export const $modalPasswordInputValue = createStore('')
    .on(setModalPasswordInputValue, (state, payload) => payload)

export const $loginModalAnimatedValue = createStore(new Animated.Value(0))

export const $isMountedLoginModal = createStore(false)
    .on(setIsMountedLoginModal, (state, payload) => payload)

showLoginModal.watch( ()=>{
    setIsMountedLoginModal(true)
    startAnimation(1, $loginModalAnimatedValue.getState())
})
hideLoginModal.watch(async ()=>{
    await startAnimation(0, $loginModalAnimatedValue.getState())
    setIsMountedLoginModal(false)
})
