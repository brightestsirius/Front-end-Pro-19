// ternar

// let number = 10;

// if number > 5 => +2
// else +3

// if(number>5) number += 2;
// else number += 3;

// number += number>5 ? 2 : 3;

// word1_word2_word3!!!

// let finalString = ``;
// for(let i=1; i<=5; i++){
//     finalString += `word${i}`;

//     // if(i === 5) finalString += `!!!`;
//     // else finalString += `_`;

//     finalString += i === 5 ? `!!!` : `_`;
// }

// console.log(finalString); // word1_word2_word3!!!

// document.write()

// document.write(`<h1 style="color: red" class="active">Hello</h1>`);

// const third = false;

// document.write(`<ul>
//     <li>First</li>
//     <li>Second</li>
//     ${third ? `<li>Third</li>` : ``}
// </ul>
// `);


// document.write(`<ul>`);

// for(let i=1; i<=5; i++){
//     document.write(`<li>Item_${i}</li>`);
// }

// document.write(`</ul>`);

// let LIs = ``;
// for(let i=1; i<=5; i++){
//     LIs += `<li>Item_${i}</li>`;
// }

// document.write(`<ul>${LIs}</ul>`);
// document.write(LIs);

// Factorial

// const number = 5;
// let factorial = 1;

// for(let i=1; i<=number; i++){
//     console.log(`${i} * ${factorial} = ${factorial*i}`);
//     factorial *= i;
// }

// console.log(`${number}! = ${factorial}`);


// Factorial of number
// Sum of factorials 1-10

// let sum = 0;

// for(let i=1; i<=4; i++){
//     //console.log(i); // 5

//     let factorial = 1;
//     for(let j=1; j<=i; j++){
//         factorial *= j;
//     }

//     console.log(factorial); // !5
//     sum += factorial;
// }

// console.log(`Sum of factorials: ${sum}`);

// let factorial=1;
// for(let i=1; i<=5; factorial*=i, i++){}
// console.log(factorial);

// Fibonacci numbers
// Print 10 numbers if Fibonacci

// let first = 0,
//     second = 1;

// console.log(first);
// console.log(second);

// 0 1 1 ?

// let next;

// for(i=1; i<=8; i++){
//     next = first + second;

//     first = second;
//     second = next;
// }

// console.log(next);

// Prime number
// %

// 5/1 = 0
// // 5/2 = 1
// // 5/3 = 1
// // 5/4 = 1
// 5/5 = 0

// 6%1 = 0
// 6%2 = 0 – not prime => break;
// 6%3 = 0
// 6%4 = 1
// 6%5 = 1
// 6%6 = 0

// const number = 100;
// let isPrime = true;

// for(i=2; i<number; i++){
//     let module = number%i; // 5%4 = 1

//     console.log(`${number} % ${i} = ${module}`);

//     if(module === 0){
//         isPrime = false;
//         break;
//     }
// }

// console.log(`${number} is ${isPrime ? `prime` : `not prime`} number.`);

// Array

// let users = [`Anna`, `Oleg`, `Sasha`];
// console.log(users);

// console.log(users.length);

// let Anna = users[0];
// console.log(Anna);

// let lastItemIndex = users.length-1; // 2
// console.log( users[lastItemIndex] );

// users[1] = `dog`;

// let animals = [];
// console.log(animals);

// animals[0] = `cat`; // 1
// animals[animals.length] = `dog`;
// animals[animals.length] = `lion`;

// let animals = [`cat`, `dog`, `lion`];
// console.log(animals);

// // animals.length = 1;

// // animals[1] = undefined;

// animals[1] = animals[2];
// animals.length = 2;

// let arr = [];
// // arr.length = +prompt(`Enter length of array`);
// let arrLength = +prompt(`Enter length of array`);
// console.log(arr);

// for(i=0; i<arrLength; i++){
//     arr[i] = `cat_${i+1}`;
// }

// length

// let arr = [10];
// arr.length = 10;

// let arr = new Array(10, 'hello', true); // []
// console.log(arr);

// min/max element in array

let arr = [10, -100, 20, 200, 49, 34]; // length=6
let min = max = arr[0];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);

    if(arr[i] < min){
        min = arr[i];
    }

    if(arr[i] > max){
        max = arr[i];
    }
}

console.log(`Min element in array: ${min}`);
console.log(`Max element in array: ${max}`);

// min/max element in array by index
// change position of min/max

// Math.random()

// Copy of array

// Array methods
//     push
//     pop
//     shift
//     unshift
//     reverse
//     concat
//     slice
//     splice
//     join
//     split
//     indexOf

// Two dimensional array