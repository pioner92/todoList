import {createEvent, createStore} from 'effector'
import {Animated, Easing} from 'react-native'

export const setIsMountedEditTaskModal = createEvent<boolean>()
export const showEditTaskModal = createEvent()
export const hideEditTaskModal = createEvent()
export const setEditTaskModalInputValue = createEvent<string>()
export const resetEditTaskModalInputValue = createEvent()

export const setSelectedTaskId = createEvent<number>()
export const resetSelectedTaskId = createEvent()


export const $selectedTaskId = createStore<number | null>(null)
    .on(setSelectedTaskId, (state, payload) => payload)
    .reset(resetSelectedTaskId)

export const $editTaskModalInputValue = createStore('')
    .on(setEditTaskModalInputValue, (state, payload) => payload)
    .reset(resetEditTaskModalInputValue)

export const $isMountedEditTaskModal = createStore(false)
    .on(setIsMountedEditTaskModal, (state, payload) => payload)

export const $editTaskModalAnimatedValue = createStore(new Animated.Value(0))

export const startAnimation = (value: number, animValue:Animated.Value) => {
    return new Promise((resolve) => {
        Animated.timing(animValue, {
            toValue: value,
            easing: Easing.bezier(0.2, 0.8, 0.2, 1),
            useNativeDriver: true,
        }).start(resolve)
    })
}


showEditTaskModal.watch(() => {
    setIsMountedEditTaskModal(true)
    startAnimation(1, $editTaskModalAnimatedValue.getState())
})

hideEditTaskModal.watch(async () => {
    await startAnimation(0, $editTaskModalAnimatedValue.getState())
    resetSelectedTaskId()
    setIsMountedEditTaskModal(false)
})
