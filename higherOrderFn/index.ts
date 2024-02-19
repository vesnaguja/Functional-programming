//task 1: update operatorFn so it can handle division and multipication
const operatorFn = (operation: "+" | "-" | "*" | "/", num: number) => {
  return (num1: number) => {
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
