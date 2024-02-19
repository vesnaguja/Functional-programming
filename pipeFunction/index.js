var pipe = function (value) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.reduce(function (acc, fn) { return fn(acc); }, value);
};
function add1(x) {
    return x + 1;
}
//this is one way to solve it, throw an error in any of the pipes then catch it
//types of this FN don't show error throw
function inverse(x) {
    if (x === 0) {
        throw new Error("zero_cant_be_divided");
    }
    return 1 / x;
}
function tap(x) {
    console.log("->", x);
    return x;
}
var functionalCalculation = function (x) {
    //types dont help for a specific value, we get an error, 0 is a valid number type
    try {
        return pipe(x, inverse, add1);
    }
    catch (e) {
        //type of e is unknown in strict mode
        console.log("Error: ".concat(e.message));
        return "Divide by 0 not possible";
    }
};
//Dirty dirty world
function imperfectDirtyWorld() {
    var _a;
    var promptText = (_a = prompt("Give me a number to work with")) !== null && _a !== void 0 ? _a : "";
    var promtNumber = Number(promptText);
    // our clean isolated function
    var result = functionalCalculation(promtNumber);
    // end our our isolated function
    alert(result);
}
imperfectDirtyWorld();
