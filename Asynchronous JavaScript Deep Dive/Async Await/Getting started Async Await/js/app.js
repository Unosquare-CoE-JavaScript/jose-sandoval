"use strict";

/*const plainFunction = async function() {
    console.log("start");
    return "done";
}

async function plainFunction() {
    console.log("start");
    return "done";
}

plainFunction().then(val => console.log(val));*/

const asyncFun = async function() {
    let p1 = await asyncFunction();
    console.log(p1);
    console.log(`${p1}-more info`);
}

asyncFun();