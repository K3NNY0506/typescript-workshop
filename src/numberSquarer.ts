// map.ts

const array_of_numbers: number[] = [1, 3, 5, 7, 9];

const numberSquarer = (receiver: number): number => receiver * receiver;

const new_array: number[] = array_of_numbers.map(numberSquarer);
console.log(new_array);

export {array_of_numbers, numberSquarer, new_array};
