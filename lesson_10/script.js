// arguments

// function sum(first, ...args){
//     console.log(first); // 10
//     console.log(args); // 20, 100

//     // let jsonArray = JSON.parse(JSON.stringify(arguments));
//     // console.log(jsonArray);
//     // console.log(arguments);

//     let sumResult = 0;
//     for(let i=0; i<args.length; i++) sumResult+= args[i];
    
//     return sumResult;
// }

// let x = 10,
//     y = 20;

// console.log( sum(x, y, 100, 300, 400) );

// function as argument

// function operation (x, y, funcName){
//     // if(typeof funcName === `function`){
//     //     return funcName(x, y);
//     // } else{
//     //     return `funcName is not a function`;
//     // }

//     return typeof funcName === `function` 
//         ? funcName(x, y) 
//         : `funcName is not a function`;
    
// }

// function sum(a, b){
//     return a+b;
// }

// function multiply(a, b){
//     return a*b;
// }

// console.log( operation(10, 20, sum) );
// console.log( operation(10, 20, multiply) );
// console.log( operation(10, 20, 100) );
// console.log( operation(10, 20) );

// function operation(...args){
//     // console.log(args);

//     let funcName;

//     for(let i=0; i<args.length; i++){
//         if(typeof args[i] === `function`){
//             funcName = args[i];
//             args.splice(i,1);
//         }
//     }

//     return typeof funcName === `function` 
//         ? funcName(args) 
//         : `funcName is not a function`;
// }

// function sum(args){
//     let sumResult = 0;
//     for(let i=0; i<args.length; i++) sumResult += args[i];

//     return sumResult;
// }

// function multiply(args){
//     let multiplyResult = 1;
//     for(let i=0; i<args.length; i++) multiplyResult *= args[i];

//     return multiplyResult;
// }

// console.log( operation(10,20,30,sum,40,50) );
// console.log( operation(10,20,30,40,multiply,50) );

// callback
// spread/rest in function
// arrow function

// let sumFirst = sum(10, 20);


// const sum = (x, y) => x+y;

// let sumFirst = sum(10, 20);
// console.log(sumFirst);

// const pow = (value, stepen) => {
//     let firstResult = Math.pow(value, stepen);
//     return firstResult*100;
// }

// console.log( pow(2, 3) );

// const foo = (ten, ...args) => {
//     console.log(ten);
//     console.log(args);
// }

// foo(10,20,30,40);

// const userGetLogined = () => console.log(`userGetLogined`);
// const userSendEmail = () => console.log(`userSendEmail`);
// const userShowCookie = () => console.log(`userShowCookie`);

// const userGetLogined = () => console.log(`userGetLogined`);
// const userSendEmail = () => console.log(`userSendEmail`);
// const userShowCookie = () => console.log(`userShowCookie`);

// const userData = () => {
//     userGetLogined();
//     userSendEmail();
//     userShowCookie();
// }

// userData();

// recursion

// let arr = [
//     10,
//     [10,20,30]
// ];

// function copyOfArray(list){
//     let newArray = [];

//     for(let i=0; i<list.length; i++){
//         if(Array.isArray(list[i])){
//             newArray.push( copyOfArray(list[i]) );
//         } else{
//             newArray.push(list[i]);
//         }
//     }

//     return newArray;
// }

// let arr_2 = copyOfArray(arr);

// arr_2[1][0] = `CAT`;

// console.log(arr);
// console.log(arr_2);

// setTimeout

// const foo = (x,y) => {
//     let sum = x+y;
//     console.log(sum);
// }

// setTimeout(
//     function(){
//         foo(10,20);
//     }
//     , 1000);

// setTimeout(() => foo(10,20), 2000);

// setTimeout(()=>{
//     console.log(`after 3s`)
// }, 3000);

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// console.log(`-----`);

// const myFunc = loopTo => {
//     for(let i=0; i<=loopTo; i++){
//         console.log(i); // 50000000000
//     }
// }

// myFunc(1000000000000000000000);

// console.log(`-----`);

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// function foo(){

//     console.log(`first`);

    
//     setTimeout(()=>{
//         console.log(`second`);
//     }, 0);

//     console.log(`third`);

//     for(let i=0; i<=10; i++){
//         console.log(i); // 5
//     }

//     console.log(`-----`);

//     for(let i=0; i<=10; i++){
//         console.log(i); // 1
//     }
// }

// foo();


// setInterval/clearInterval

// let count = 0;

// setInterval(() => console.log(`hello ${++count}`), 1000);
// setInterval(() => console.log(`Another interval ${++count}`), 1000);