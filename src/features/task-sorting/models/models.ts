import {createEvent, createStore} from 'effector'

export const sortFields = ['id', 'username', 'email', 'status']
export const sortDirections = [{title: '▲', value: 'ask'}, {title: '▼', value: 'desc'}]

export const setTaskSortingField = createEvent<string>()
export const setTaskSortingDirection = createEvent<string>()

export const $taskSortingField = createStore(sortFields[0])
    .on(setTaskSortingField, (state, payload) => payload)

export const $taskSortingDirection = createStore(sortDirections[0].value)
    .on(setTaskSortingDirection, (state, payload) => payload)


