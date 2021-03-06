import {createEffect} from 'effector'
import {makeRequest, statusType} from '../make-request'
import {urls} from '../urls'
import {loadAllTasks, setTaskCount} from '../../screens/main/models/models'

export type taskType = {
    id: number
    username: string
    email: string
    text:string
    status: number
}

export type tasksType = Array<taskType>

type responseType = {
    status: statusType
    message: {
        tasks: tasksType
        total_task_count: string
    }
}

type dataType = {
    page?:number
    sortField?:string
    sortDirection?:string
}

export const getTasks = createEffect(async ({page=1, sortField, sortDirection}:dataType) :Promise<responseType|undefined>=>{
    try {
        const query = `page=${page}&sort_field=${sortField}&sort_direction=${sortDirection}`
        return await makeRequest(urls.tasks(query), 'GET')
    } catch (e) {
        console.log('Get tasks load error ', e)
    }
})


getTasks.done.watch(({result})=>{
    if (result) {
        setTaskCount(+result.message.total_task_count)
        loadAllTasks(result.message.tasks)
    }
})
