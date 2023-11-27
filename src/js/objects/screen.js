const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>👥Seguidores: ${user.followers ?? 'Não possui seguidores 😥'} | 👥Seguindo: ${user.following ?? 'Não segue ninguém 😥'}</p>
                                            <p>${user.bio ?? 'Não possui bio cadastrado 😥'}</p>
                                        </div>
                                    </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_black">${repo.name} <p>🍴${repo.forks}|⭐${repo.stargazers_count}|👀${repo.watchers}|💻${repo.language}</p></a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                          </div>`
        }

        let eventsItens = ''
        user.events.forEach(event => {
            if ((event.type === 'CreateEvent' || event.type === 'PushEvent') && event.payload?.commits?.length > 0) {
                const repoName = event.repo.name

                event.payload.commits.forEach(commit => {
                    const message = commit.message
                    eventsItens += `<li>${repoName} - ${message}</li>`
                })
            }
        })

        if (eventsItens) {
            this.userProfile.innerHTML += `<div class="events ">
                                            <h2>Eventos</h2> <br>
                                            <ul>${eventsItens}</ul>
                                          </div>`;
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML += "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }