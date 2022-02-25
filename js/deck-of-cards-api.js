const main = document.getElementById('cards');
const searchButton = () => {
    const inputField = document.getElementById('input-field');
    const error = document.getElementById('error');
    const inputFieldText = inputField.value;
    inputField.value = '';
    if (isNaN(inputFieldText) || inputFieldText == '') {
        // alert('please enter a number');
        error.innerText = 'Please enter a number';
        main.textContent = '';

    }
    else if (inputFieldText < 0) {
        error.innerText = 'please enter a valid number';
        main.textContent = '';
    }
    else {
        error.innerText = '';
        main.textContent = '';
        fetch(`http://deckofcardsapi.com/api/deck/new/draw/?count=${inputFieldText}`)
            .then(res => res.json())
            .then(data => displayCards(data.cards))
    }
}

const displayCards = cards => {

    console.log(cards);
    cards.forEach(card => {
        const div = document.createElement('div');
        div.className = 'col-lg-4';
        div.classList.add('mb-3');
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.code}</p>
                <button onclick="cardDetails('${card.code}')" class="btn btn-primary">See Details</button>
            </div>
        </div>
        `;
        main.appendChild(div);
    })
}

const cardDetails = code => {
    main.textContent = '';
    fetch(`http://deckofcardsapi.com/api/deck/new/draw/?count=52`)
        .then(res => res.json())
        .then(data => {
            const allCards = data.cards;
            const singleCard = allCards.find(card => card.code === code)
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${singleCard.image}" class="card-img-top" alt="...">
                <div class="card-body">
                   <h5 class="card-title">${singleCard.suit}</h5>
                   <p class="card-text">${singleCard.code}</p>
                   <p class="card-text">${singleCard.value}</p>
                   
                </div>
            </div>
           `;
            main.appendChild(div);
        })
}