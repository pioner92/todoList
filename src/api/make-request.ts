type dataType = {
    method:string
    body:FormData
    headers:any
    token?:string
}
export type statusType = 'error' | 'ok'

export const makeRequest = async (url:string, method:string, body?:FormData, token?:string) => {
    const data:dataType = {
        method,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json',
        },
    } as dataType

    if (token) {
        data.token = token
    }
    if (body) {
        data.body = body
    }

    const response = await fetch(url, data)
    return await response.json()
}
