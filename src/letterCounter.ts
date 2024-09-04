// filter.ts

const words: string[] = [
  'hello',
  'my',
  'name',
  'is',
  'kenny',
  'delara',
  'random_word',
];

const letterCounter = (word: string): boolean => word.length > 5;

const wordsGreaterThanFive: string[] = words.filter(letterCounter);
console.log(wordsGreaterThanFive);

export {words, letterCounter, wordsGreaterThanFive};
