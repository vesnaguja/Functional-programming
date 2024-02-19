//task 1: update operatorFn so it can handle division and multipication
var operatorFn = function (operation, num) {
    return function (num1) {
        if (operation === "+") {
            return num1 + num;
        }
        if (operation === "*") {
            return num1 * num;
        }
        if (operation === "/") {
            return num1 / num;
        }
        return num - num1;
    };
};
console.log(operatorFn("+", 10)(10));
console.log(operatorFn("-", 10)(10));
console.log(operatorFn("*", 10)(10));
console.log(operatorFn("/", 10)(10));
