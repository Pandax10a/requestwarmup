document.getElementById(`for_clicking`).addEventListener(`click`, the_brewery);

function the_brewery (details) {
    axios.request({
        url: `https://api.openbrewerydb.org/breweries/random`
    }).then(successFunction).catch(failureFunction);
}

function successFunction (response4444) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1>${response4444[`data`][0][`name`]} </h1>
    <h2>${response4444[`data`][0][`street`]} <br>
    ${response4444[`data`][0][`city`]}, ${response4444[`data`][0][`state`]} <br>
    ${response4444[`data`][0][`country`]} ${response4444[`data`][0][`postal_code`]} </h2>`);

}

function failureFunction (error1111) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1> failed</h1>`);
}

document.getElementById(`num_2`).addEventListener(`click`, find_crypto);

function find_crypto (details) {
    axios.request ({
        url: `https://api2.binance.com/api/v3/ticker/24hr`
    }).then(success2).catch(failture2);
}

function success2 (response333) {
    for(let i = 0; i < response333[`data`].length;i++){
    document.body.insertAdjacentHTML(`beforeend`, `<h1> ${response333[`data`][i][`symbol`]}  $ ${response333[`data`][i][`lastPrice`]} `)
    }
}

function failture2 (error111111) {
    document.body.insertAdjacentHTML(`beforeend`, `<h1> failed</h1>`);
}