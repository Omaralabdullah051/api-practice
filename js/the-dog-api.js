const loadDog = () => {
    fetch('https://api.thedogapi.com/v1/breeds')
        .then(res => res.json())
        .then(data => displayDog(data));
}

const displayDog = dogs => {
    const main = document.getElementById('main');
    const firstData = dogs.slice(0, 10);
    firstData.forEach(dog => {
        console.log(dog);
        const div = document.createElement('div');
        div.className = 'col-lg-4';
        div.innerHTML = `
        <h3>${dog.name}</h3>
        <p>${dog.temperament}</p>
        <p>${dog.weight.imperial}</p>
        <img width="400px" height="250" src="${dog.image.url}">
        `;
        main.appendChild(div);
    })
}