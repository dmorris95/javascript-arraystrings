//Task 1
let fruits = ['apple', 'banana', 'orange', 'grapefruit', 'peach'];

//Push
fruits.push('cherry');
console.log(fruits);
//Pop
let lastFruit = fruits.pop();
console.log(lastFruit);

//Task 2
let numbers = [2, 3, 7, 1, 4];
//Sort
numbers.sort((a,b) => a - b);
console.log(numbers);

//Task 3
let numArray = [2, 5, 3, 1, 8];

//map
let doubled = numArray.map(n => n * 2);
console.log(doubled);

//filter
let oddArray = numArray.filter(num => (num%2) == 1);
console.log(oddArray)

//reduce
let sum = numArray.reduce((acc, curr) => acc + curr, 0);
console.log(sum);