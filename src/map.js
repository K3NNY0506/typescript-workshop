'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
exports.sqaureNumber = void 0;
const sqaureNumber = function (numbers) {
  const squaredNumbers = numbers.map(number => {
    return number * number;
  });
  return squaredNumbers;
};
exports.sqaureNumber = sqaureNumber;
