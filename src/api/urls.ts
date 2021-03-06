
const mainUrl = 'https://uxcandy.com/~shapoval/test-task-backend/v2/'

const createUrl = ({action='', query=''}:{action?:string, query?:string}) => {
    return `${mainUrl}${action}/?developer=Alex&${query}`
}

export const urls = {
    login: createUrl({action: 'login'}),
    create: createUrl({action: 'create'}),
    edit: (id:number) => createUrl({action: `edit/${id}`}),
    tasks: (query:string)=>createUrl({query}),
}

