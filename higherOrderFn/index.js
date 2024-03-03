"use strict";
//task 1: update operatorFn so it can handle division and multipication
const operatorFn = (operation, num) => {
    return (num1) => {
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
