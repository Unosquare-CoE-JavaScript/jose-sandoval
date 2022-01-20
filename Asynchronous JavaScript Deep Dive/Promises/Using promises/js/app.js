"use strict";

let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=8v5fx2giabyyx4rps9dxqc087a6u1964gtrzf9z93dkm4zdrm",
    wordObj;

fetch(wordnikWords + "randomWord" + apiKey).then((response) => {
    wordObj = response;
    //console.log(wordObj);
    return response.json();
}).then((data) => {
    console.log(data.word);
    return fetch(wordnikWord + data.word + "/definitions" + apiKey);
}).then((def) => {
    return def.json();
}).then((def) =>{
    console.log(def);
}).catch((err) => {
    console.log(err);
});

console.log("See this async code!");

/*asyncFunction().then((val) => {
    console.log("Yeah!! " + val);
    return asyncFunction2();
}).then((val) => {
    console.log("Second promise " + val);
})

console.log("This code is asynchronous")*/