import {createEffect} from 'effector'
import {makeRequest, statusType} from '../make-request'
import {urls} from '../urls'

type dataType = {
    username:string
    email:string
    text:string
}

type responseType = {
    status: statusType,
    message: {
        id: number,
        username: string
        email: string
        text: string
        status: number
    }
}

export const createTask = createEffect(async ({username, email, text}:dataType):Promise<responseType|undefined>=>{
    try {
        const form = new FormData()
        form.append('username', username)
        form.append('email', email)
        form.append('text', text)

        return await makeRequest(urls.create, 'POST', form)
    } catch (e) {
        console.log('Create task error ', e)
    }
})

