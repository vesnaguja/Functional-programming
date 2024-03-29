import * as pipe from "../utils/index.js";

function invert(x: number) {
  if (x === 0) {
    throw new Error("zero_cant_be_divided");
  }
  return 1 / x;
}

function multiply2(x: number) {
  return x * 2;
}

function add4(x: number) {
  return x + 4;
}

function add10(x: number) {
  return x + 10;
}

function add5Percentage(x: number) {
  return x + (x * 5) / 100;
}
function divideBy15(x: number) {
  return x / 15;
}

// Add 10, increase by 5%, divide by 15, then find the reciprocal value —> all using higher-order functions
function functionalCalculation2(x: number) {
  // return invert(divideBy15(add5Percentage(add10(x))));
  try {
    return pipe(x, add10, add5Percentage, divideBy15, invert);
  } catch (e: any) {
    //type of e is unknown in strict mode
    console.log(`Error: ${e.message}`);
    return "Divide by 0 not possible";
  }
}

// Dirty dirty world
function imperfectDirtyWorld2() {
  const promptText = prompt("Give me a number to work with") ?? "";
  const promtNumber = Number(promptText);

  // our clean isolated funfunctionalCalculationction
  const result = functionalCalculation2(promtNumber);
  // end of isolated functional and tested world

  console.log("final result", result);
  alert(result);
}

// enter in prompt -2 to get side effects
imperfectDirtyWorld2();

// export {};
