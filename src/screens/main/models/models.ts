import {createEvent, createStore} from 'effector'
import {tasksType, taskType} from '../../../api/rest/get-tasks'


export const setTaskCount = createEvent<number>()
export const loadAllTasks = createEvent<tasksType>()
export const addTaskToList = createEvent<taskType>()
export const deleteTaskFromList = createEvent<number>()
export const editTaskText = createEvent<{ id: number, text: string }>()
export const editTaskStatus = createEvent<{ id: number, status: number }>()

export const statusValidate = (status: number) => {
    switch (status) {
    case 0:
        return 1
        break
    case 10:
        return 11
        break
    default:
        return status
    }
}

const editTask = ({state, id, status, text}:{state:tasksType, id:number, status?:number, text?:string}) => {
    const index = state.findIndex((el) => el.id === id)
    if (index !== -1) {
        if (text !== undefined && state !== undefined) {
            state[index].text = text
            state[index].status = statusValidate(state[index].status)
        } else if (status !== undefined && text === undefined) {
            state[index].status = status
        }
    }
    return state
}

export const $taskCount = createStore(0)
    .on(setTaskCount,(state, payload) => payload)


export const $taskList = createStore([] as tasksType)
    .on(loadAllTasks, (_, payload) => payload)
    .on(addTaskToList, (state, payload) => [...state, payload])
    .on(deleteTaskFromList, (state, payload) => state.filter((el) => el.id !== payload))
    .on(editTaskStatus, (state, payload) => {
        return [...editTask({state, id: payload.id, status: payload.status})]
    })
    .on(editTaskText, (state, payload) => {
        return [...editTask({state, id: payload.id, text: payload.text})]
    })
