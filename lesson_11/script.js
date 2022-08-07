// push element to array

// const pushToArray = list => {
//     let newArr = JSON.parse(JSON.stringify(list));

//     let number;
//     do{
//         number = +prompt(`Enter number`); // null => 0, '' => 0, 'hello' => NaN
//     } while(isNaN(number));

//     newArr.push(number);
//     return newArr;
// }

// let arr = [10,20,30];
// let arr_2 = pushToArray(arr);

// console.log(arr);
// console.log(arr_2);

// calculator
// 2 numbers && sum/multiply

// const COUNT_NUMBERS = 2;

// const getNumbers = (count=COUNT_NUMBERS) => {
//     let numbers = [];
//     for(let i=1; i<=COUNT_NUMBERS; i++){
//         let number;
//         do{
//             number = +prompt(`Enter number #${i}`);
//         } while(!number || isNaN(number));

//         numbers.push(number);
//     }

//     return numbers;
// }

// const sum = array => {
//     let result = 0;
//     for(let i=0; i<array.length; i++){
//         result += array[i];
//     }

//     return result;
// }

// const multiply = array => {
//     let result = 1;
//     for(let i=0; i<array.length; i++){
//         result *= array[i];
//     }

//     return result;
// }

// const sub = array => {
//     let result = array[0];

//     for(let i=1; i<array.length; i++){
//         result -= array[i];
//     }

//     return result;
// }

// const OPERATIONS = [
//     [`sum`, sum],
//     [`multiply`, multiply],
//     [`vidnimannya`, sub]
// ];

// const getOperationsName = () => {
//     let names = [];

//     for(let i=0; i<OPERATIONS.length; i++){
//         let operationInfo = OPERATIONS[i]; // [`sum`, sum]
//         names.push(operationInfo[0]);
//     }

//     return names;
// }

// const getOperationByName = (operationName, numbers) => {
//     for(let i=0; i<OPERATIONS.length; i++){
//         let operationInfo = OPERATIONS[i];
//         if(operationInfo[0] === operationName){
//             return operationInfo[1](numbers);
//         }
//     }
// }

// const getOperationName = () => {
//     let operationsName = getOperationsName();
//     let operation;
//     do{
//         operation = prompt(`Choose: ${operationsName.join(` or `)}`);
//         if(operation) operation = operation.replaceAll(` `, ``).toLowerCase();
//     } while(!operation || !operationsName.includes(operation));
    
//     return operation;
// }

// const calculator = () => {
//     let numbers = getNumbers();
//     let operation = getOperationName();

//     return getOperationByName(operation, numbers);
// }

// let result = calculator();
// console.log(result);

// let result_2 = getOperationByName(`sum`, [1,2,3]);
// console.log(result_2);

// forEach()

// let arr = [10, 20, 30];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(
//     function(element, index){
//         console.log(`Current element: ${element}. Next element: ${arr[index+1]}`);
//     }
// )

// let arr = [10,20,30];

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]+5);
// }

// arr.forEach(
//     function(item){
//         item+=5
//         console.log(item);
//     }
// )

// console.log(arr);

// let arr = [
//     10,
//     [10,20,30],
//     [40,50,60]
// ]

// for(let i=0; i<arr.length; i++){
//     let currentItem = arr[i]; // [10,20,30];

//     for(let j=0; j<currentItem.length; j++){
//         currentItem[j] += 5;
//     }
// }

// console.log(arr);

// arr.forEach(
//     function(currentItem){ // [10,20,30]
//         currentItem = JSON.parse(JSON.stringify(currentItem));
//         for(let j=0; j<currentItem.length; j++){
//             currentItem[j] += 5;
//         }
//         console.log(currentItem);
//     }
// )

// console.log(arr);

// let arr = [10,20,30];

// arr.forEach(
//     (item, index, array) => {
//         // debugger;
//         console.log(item);
//     }
// );

// arr.forEach(item => console.log(item));

// filter()

// let arr = [10,20,'hello',true,undefined,30, -30];
// console.log(arr);

// let arrOfNumbers = [];
// for(let i=0; i<arr.length; i++){
//     if(typeof arr[i] === `number` && !isNaN(arr[i])) arrOfNumbers.push(arr[i]);
// }
// console.log(arrOfNumbers);

// let arrOfNumbers = arr
//     .filter(
//         (item) => typeof item === `number` && !isNaN(item)
//     )
//     .filter(
//         (item) => item>0
//     )

// let filteredArray = arr.filter(item => typeof item === `number` && !isNaN(item) && item>0);

// console.log(filteredArray);


// let data = [10,20,`Oleg`,`Anna`,true, false];

// let filteredArray = data
//     .filter(item => typeof item === `string`);

// document.write(`<ul>
//     <li>${filteredArray.join(`</li><li>`)}</li>
// </ul>`);

// document.write(`<ol>
//     <li>${filteredArray.join(`</li><li>`)}</li>
// </ol>`);

// console.log(filteredArray);

// map()

// let arr = [10,20,30];

// let modifiedArray = arr.map(item => item*2)
// console.log(modifiedArray);

// let arr = [10,20,30,40,'hello',true,-10];

// arr
//     .filter(item => typeof item === `number` && !isNaN(item)) // [10,20,30,40,-10]
//     .filter(item => item>0) // [10,20,30,40]
//     .map(item => item*2) // [20,40,60,80]
//     .forEach(item => document.write(`<p>${item}</p>`));

// console.log(arr);

// let modifiedArray = arr
//     .filter(item => typeof item === `number` && !isNaN(item) && item>0) // [10,20,30,40,-10]
//     .map(item => `<li>${item*2}</li>`)
//     .join(``);

// console.log(modifiedArray);
// document.write(`<ul>${modifiedArray}</ul>`)

// find()/findIndex()

// let arr = [10,'hello',20,30];

// console.log( arr.indexOf(`hello`) ); // -1, >-1
// console.log( arr.includes(`hello`) ); // true/false

// let elementExist = arr.find(item => item === `hello`);
// console.log(elementExist);

// let elementExistAtIndex = arr.findIndex(item => item === `hello`);
// console.log(elementExistAtIndex);

// every()/some()

// let arr = ['15',20,30];

// let stringExist = arr.find(item => typeof item !== `number`);
// console.log(stringExist);

// let numberExist = arr.some(item => {
//     console.log(item);
//     return typeof item === `number`;
// });
// console.log(numberExist);

// let indexOfString;

// let allNumbers = arr
//     .every((item,index) => {
//         if(typeof item === `number`) indexOfString = index;
//         return typeof item === `number`;
//     });

// console.log(allNumbers);

// reduce()

// forEach => undefined
// filter = Array, []
// map => Array

// some/every => Boolean

// find => Element, undefined
// findIndex => index, -1

// reduce

// let arr = [10,20,30];

// let sum = arr.reduce(
//     function(final, item, index, array){
//         return final+item;
//     }
// )

// console.log(sum);

let arr = [10,20,'hello',-29];

let sum = arr
    .filter(item => typeof item === `number`)
    .map(item => Math.pow(item, 2))
    .reduce((final, item) => final+item);
    
console.log(sum);

// Object

// Object.keys
// Object.entries

// Object prototype