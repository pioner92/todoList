import {createEffect} from 'effector'
import {makeRequest, statusType} from '../make-request'
import {urls} from '../urls'
import {LocalStorage} from '../../lib/local-storage'

type dataType = {
    login:string
    password:string
}

type responseType = {
    status: statusType,
    message:{
        token?:string
    }
}

export const login = createEffect(async ({login, password}:dataType):Promise<responseType| undefined> =>{
    try {
        const form = new FormData()
        form.append('username', login)
        form.append('password', password)

        return makeRequest(urls.login, 'POST', form)
    } catch (e) {
        console.log('Login error ', e)
    }
})


login.done.watch(({result})=> {
    if (result) {
        if (result.message?.token) {
            LocalStorage.set('token', result.message.token)
        }
    }
})
