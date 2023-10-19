import { BaseUrl, RepositoriesQuantity } from '../variables.js'

async function getRepositories(userName){
    const response = await fetch(`${BaseUrl}/${userName}/repos?per_page=${RepositoriesQuantity}`)
    return await response.json()
}

export { getRepositories }