'use strict';

const multiplierVariable = 1.27;
const sampleArray = [534, 21, 5, 7, 2, 64];

const multipliAllArrayElement = inputArray => inputArray
    .map(item => item * multiplierVariable)
    .reduce((prev, curr) => prev + curr);

console.log(multipliAllArrayElement(sampleArray));