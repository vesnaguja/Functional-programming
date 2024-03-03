import * as pipe from "../utils/index";
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
const functionalCalculation1 = (x) => {
    //types dont help for a specific value, we get an error, 0 is a valid number type
    try {
        return pipe(x, inverse, add1);
    }
    catch (e) {
        //type of e is unknown in strict mode
        console.log(`Error: ${e.message}`);
        return "Divide by 0 not possible";
    }
};
//Dirty dirty world
function imperfectDirtyWorld1() {
    var _a;
    const promptText = (_a = prompt("Give me a number to work with")) !== null && _a !== void 0 ? _a : "";
    const promtNumber = Number(promptText);
    // our clean isolated function
    const result = functionalCalculation1(promtNumber);
    // end our our isolated function
    alert(result);
}
imperfectDirtyWorld1();
// export {};
