const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
}

const displayComments = comments => {
    const container = document.getElementById('comments-container');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment')
        div.innerHTML = `
        <h3>${comment.id}</h3>
        <h4>${comment.name}</h4>
        <h5>${comment.email}</h5>
        <p>${comment.body}</p>
        `;
        container.appendChild(div);
    })
}