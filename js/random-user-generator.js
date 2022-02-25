const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => displayUsers(data.results))
}

const displayUsers = users => {
    const container = document.getElementById('card-container');
    users.forEach(user => {
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
                <img src="${user.picture.thumbnail}" class="card - img - top" alt="...">
                <div class="card-body" >
                    <h5 class="card-title">${user.name.first}</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.</p>
                </div>
        </div>
    `;
        container.appendChild(div);
    })
}