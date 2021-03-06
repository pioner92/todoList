import {createEvent, createStore} from 'effector'

export const setIsAuth = createEvent<boolean>()

export const $isAuth = createStore(false)
    .on(setIsAuth, (state, payload) => payload)

