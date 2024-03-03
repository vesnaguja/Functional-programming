"use strict";
// tests for addX are very easy to write
const addX = (x, y) => x + y;
// a way to create partial function
const add100 = addX.bind(null, 100);
const adds10 = addX.bind(null, 10);
const adds15 = addX.bind(null, 15);
//task 2: create function that takes number 5 + adds10 + adds15
function add5add10Add15(x) {
    //do calculation
    const result1 = adds10(x);
    const result2 = adds15(result1);
    return result2;
}
const result = add5add10Add15(5);
console.log("result", result);
