interface Pipe {
  <A>(value: A): A;
  <A, B>(value: A, fn1: (input: A) => B): B;
  <A, B, C>(value: A, fn1: (input: A) => B, fn2: (input: B) => C): C;
  <A, B, C, D>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D
  ): D;
  <A, B, C, D, E>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E
  ): E;
  <A, B, C, D, E, F>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F
  ): F;
  <A, B, C, D, E, F, G>(
    value: A,
    fn1: (input: A) => B,
    fn2: (input: B) => C,
    fn3: (input: C) => D,
    fn4: (input: D) => E,
    fn5: (input: E) => F,
    fn6: (input: F) => G
  ): G;
}

const pipe: Pipe = (value: any, ...fns: Function[]): unknown => {
  return fns.reduce((acc, fn) => fn(acc), value);
};

function add1(x: number) {
  return x + 1;
}

//this is one way to solve it, throw an error in any of the pipes then catch it
//types of this FN don't show error throw
function inverse(x: number) {
  if (x === 0) {
    throw new Error("zero_cant_be_divided");
  }
  return 1 / x;
}

function tap<T>(x: T) {
  console.log("->", x);
  return x;
}

const functionalCalculation = (x: number) => {
  //types dont help for a specific value, we get an error, 0 is a valid number type
  try {
    return pipe(x, inverse, add1);
  } catch (e: any) {
    //type of e is unknown in strict mode
    console.log(`Error: ${e.message}`);
    return "Divide by 0 not possible";
  }
};

//Dirty dirty world
function imperfectDirtyWorld() {
  const promptText = prompt("Give me a number to work with") ?? "";
  const promtNumber = Number(promptText);

  // our clean isolated function
  const result = functionalCalculation(promtNumber);
  // end our our isolated function
  alert(result);
}

imperfectDirtyWorld();
