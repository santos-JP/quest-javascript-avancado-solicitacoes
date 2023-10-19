import { BaseUrl } from '../variables.js'

async function getUser(userName){
    const response = await fetch(`${BaseUrl}/${userName}`)
    return await response.json()
}

export { getUser }