function invert(x) {
    return 1 / x;
}
function multiply2(x) {
    return x * 2;
}
function add4(x) {
    return x + 4;
}
function add10(x) {
    return x + 10;
}
function add5Percentage(x) {
    return x + (x * 5) / 100;
}
function divideBy15(x) {
    return x / 15;
}
// Add 10, increase by 5%, divide by 15, then find the reciprocal value —> all using higher-order functions
function functionalCalculation2(x) {
    return invert(divideBy15(add5Percentage(add10(x))));
}
// Dirty dirty world
function imperfectDirtyWorld2() {
    var _a;
    var promptText = (_a = prompt("Give me a number to work with")) !== null && _a !== void 0 ? _a : "";
    var promtNumber = Number(promptText);
    // our clean isolated funfunctionalCalculationction
    var result = functionalCalculation2(promtNumber);
    // end of isolated functional and tested world
    console.log("final result", result);
    alert(result);
}
// enter in prompt -2 to get side effects
imperfectDirtyWorld2();
// export {};
