var MAINAPP = MAINAPP || {};

(function(nsp) {
    "use strict";

    let wordnikWord = "http://api.wordnik.com/v4/word.json/",
        apiKey = "?api_key=8v5fx2giabyyx4rps9dxqc087a6u1964gtrzf9z93dkm4zdrm",
        field = document.querySelector('#word'),
        btn = document.querySelector('#submitBtn'),
        results = document.querySelector('#results'),
        word,
        scrabbleVal = 0;

    const getValue = function(word) {
        //code this function so it will query the wordnik site. Send a word that is entered in the field. Retrieve the scrabble score from the site. Extract the score from the response and then display it in the results span tag.
        fetch(wordnikWord + word + "/scrabbleScore" + apiKey).then((data) =>{
            return data.json();
        }).then((score) => {
            scrabbleVal = score.value;
            results.innerHTML = scrabbleVal;
        });
    };

    btn.addEventListener('click', function(e) {
        word = field.value;
        getValue(word);
    });

    nsp.scrabbleVal = scrabbleVal;
})(MAINAPP);



