import {sqaureNumber} from './map';

// src/index.ts
import {fruits, printFruits} from './printFruits';
import {array_of_numbers, numberSquarer, new_array} from './numberSquarer';
import {words, letterCounter, wordsGreaterThanFive} from './letterCounter';
import {sliceThisWord, newWord} from './sliceThisWord';

console.log(fruits);
printFruits('example fruit');
console.log(array_of_numbers);
console.log(new_array);
console.log(words);
console.log(wordsGreaterThanFive);
console.log(sliceThisWord);
console.log(newWord);
console.log(numberSquarer);
console.log(letterCounter);

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = {am: 'I tabbed?'};

const iWish = "I didn't have a trailing space...";

const sicilian = true;

const vizzini = sicilian ? !sicilian : sicilian;

const re = /foo {3}bar/;

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
  //function on one line
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
}
// TODO: more examples

const numbers = [2, 4, 6, 8];

console.log(sqaureNumber(numbers));
