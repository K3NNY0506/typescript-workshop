// forEach.ts

const fruits: string[] = ['apple', 'banana', 'pineapple', 'orange', 'avocado'];

function printFruits(element: string): void {
  console.log(element);
}

fruits.forEach(printFruits);

export {fruits, printFruits};
