// tests for addX are very easy to write
var addX = function (x, y) { return x + y; };
// a way to create partial function
var add100 = addX.bind(null, 100);
var adds10 = addX.bind(null, 10);
var adds15 = addX.bind(null, 15);
//task 2: create function that takes number 5 + adds10 + adds15
function add5add10Add15(x) {
    //do calculation
    var result1 = adds10(x);
    var result2 = adds15(result1);
    return result2;
}
var result = add5add10Add15(5);
console.log("result", result);
