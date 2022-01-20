"use strict";

const swapiFilms = async function(){
    let url = "https://swapi.dev/api/films/",
        filmsData = {},
        films = [];
    
    filmsData = await fetch(url).then(data => data.json());

    //let filmObj = await filmsData.json();
    
    //processing data
    films = filmsData.results.map(obj => obj.title);
    console.log(films);
};

swapiFilms();

console.log("Remaining code");