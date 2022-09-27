const API_URL = "https://restcountries.com/v3.1/lang/spa";

const HTMLResponse = document.querySelector("#app");

const ul = document.createElement('ul');

fetch(API_URL).then((response) => response.json()).then((countries) => {
    countries.forEach((country) => {
        let elem = document.createElement("li");
        elem.appendChild(
            document.createTextNode(`${country.name.official} ====> ${country.capital}`)
        );
        ul.appendChild(elem);
    });

    HTMLResponse.appendChild(ul);
});

