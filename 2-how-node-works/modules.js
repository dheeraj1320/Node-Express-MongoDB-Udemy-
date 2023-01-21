// console.log(arguments);
// console.log(require("module"));

// module.exports
const C = require("./test-module-1.js");
const calc1 = new C();
console.log(calc1.add(2, 5));

// exports
// const calc2 = require("./test-module-2");
const { add, sub } = require("./test-module-2");
// console.log(calc2.add(6, 5));
console.log(add(7, 5), sub(7, 5));

//////////////////////

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();
