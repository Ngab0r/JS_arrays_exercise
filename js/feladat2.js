'use strict';

const sampleArray2 = [534, 21, 5, 7, 2, 64];
const sampleNumber2 = 10;

const allInOne = (array, number) => (
    [
        array.includes(number),
        array.findIndex(item => item == number),
        array.every(item => typeof item === 'number'),
        array.some(item => typeof item === 'number')
    ]
)

console.log(allInOne(sampleArray2, sampleNumber2));