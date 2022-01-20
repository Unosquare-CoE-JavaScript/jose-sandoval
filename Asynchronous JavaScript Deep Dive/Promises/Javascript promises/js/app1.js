"use strict";


let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};

let setTimeoutP = function(time) {
    return new Promise(function(resolve, reject) {
        if(isNaN(time)) {
            reject("A number is required!");
        }
        setTimeout(resolve, time);
    });
};

setTimeoutP(2000).then(() => {
    console.log("Done");
}).catch((err) => {
    console.log("Error: " + err);
});