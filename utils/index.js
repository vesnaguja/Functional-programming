"use strict";
// import { Pipe } from "../types/index";
const pipe = (value, ...fns) => {
    return fns.reduce((acc, fn) => fn(acc), value);
};
// export {};
