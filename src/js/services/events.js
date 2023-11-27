import { BaseUrl } from '../variables.js'

async function getEvents(userName){
    const response = await fetch(`${BaseUrl}/${userName}/events`)
    return await response.json()
}

export { getEvents }