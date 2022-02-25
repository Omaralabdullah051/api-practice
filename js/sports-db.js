const loadSports = () => {
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_sports.php')
        .then(res => res.json())
        .then(data => displaySports(data.sports))
}

const displaySports = sports => {
    const container = document.getElementById('container');
    sports.forEach(sport => {
        console.log(sport);
        const div = document.createElement('div');
        div.classList.add('sport');
        div.innerHTML = `
         <h2>${sport.idSport}</h2>
         <h3>${sport.strSport}</h3>
         <img src="${sport.strSportThumb}">
         <p>${sport.strSportDescription.slice(0, 300)}</p>
         `;
        container.appendChild(div);
    })
}