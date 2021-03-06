import {createEvent, createStore} from 'effector'
import {Animated} from 'react-native'
import {startAnimation} from "../../edit-task-modal/models/models";


export const setCreateTaskModalNameInputValue = createEvent<string>()
export const resetCreateTaskModalNameInputValue = createEvent()

export const setCreateTaskModalEmailInputValue = createEvent<string>()
export const resetCreateTaskModalEmailInputValue = createEvent()

export const setCreateTaskModalTextInputValue = createEvent<string>()
export const resetCreateTaskModalTextInputValue = createEvent()

export const setIsMountedCreateTaskModal = createEvent<boolean>()

export const resetCreateModalFields = createEvent()

export const showCreateTaskModal = createEvent()
export const hideCreateTaskModal = createEvent()

export const $createTaskModalNameInputValue = createStore('')
    .on(setCreateTaskModalNameInputValue, (state, payload) => payload)
    .reset(resetCreateTaskModalNameInputValue)

export const $createTaskModalEmailInputValue = createStore('')
    .on(setCreateTaskModalEmailInputValue, (state, payload) => payload)
    .reset(resetCreateTaskModalEmailInputValue)

export const $createTaskModalTextInputValue = createStore('')
    .on(setCreateTaskModalTextInputValue, (state, payload) => payload)
    .reset(resetCreateTaskModalTextInputValue)

export const $isMountedCreateTaskModal = createStore(false)
    .on(setIsMountedCreateTaskModal,(state, payload) => payload)

export const $createTaskModalAnimatedValue = createStore(new Animated.Value(0))


resetCreateModalFields.watch(()=>{
    resetCreateTaskModalNameInputValue()
    resetCreateTaskModalEmailInputValue()
    resetCreateTaskModalTextInputValue()
})

showCreateTaskModal.watch(()=>{
    setIsMountedCreateTaskModal(true)
    startAnimation(1, $createTaskModalAnimatedValue.getState())
})

hideCreateTaskModal.watch(async ()=>{
    await startAnimation(0, $createTaskModalAnimatedValue.getState())
    resetCreateModalFields()
    setIsMountedCreateTaskModal(false)
})
