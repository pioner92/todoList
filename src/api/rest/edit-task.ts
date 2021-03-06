import {createEffect} from 'effector'
import {makeRequest} from '../make-request'
import {urls} from '../urls'
import {LocalStorage} from '../../lib/local-storage'


type dataType = {
    text?:string
    status?:number
    id:number
}

export const editTask = createEffect(async ({text, status, id}:dataType)=>{
    const token = await LocalStorage.get('token')

    const form = new FormData()
    if (text) {
        form.append('text', text)
    }
    if (status !== undefined) {
        form.append('status', status.toString())
    }
    if (token) {
        form.append('token', token)
    }

    return makeRequest(urls.edit(id), 'POST', form, token ?? '')
})

