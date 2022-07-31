// spread/rest => ...

// let main_colors = [`red`, `green`, `purple`];
// let colors = [`blue`, ...main_colors, `yellow`, `black`];

// colors[1] = `CAT`;

// console.log(main_colors);
// console.log(colors);

// let arr = [10,20,30, [`cat`, `dog`]];
// let arr2 = JSON.parse(JSON.stringify(arr));

// arr2[3][0] = `LION`;

// console.log(arr);
// console.log(arr2);

// function

// let users = [`Anna`, `Jack`, `Anton`],
//     animals = [`cat`, `dog`, `lion`],
//     list = [users, animals];

// console.log(list);

// for(let i=0; i<list.length; i++){
//     let currentArray = list[i]; // [`Anna`, `Jack`, `Anton`]
    
//     let LIs = [];
//     for(let j=0; j<currentArray.length; j++){
//         LIs.push(`<li>${currentArray[j]}</li>`)
//     };

//     document.write(`<ul>${LIs.join(``)}</ul>`);
// }

// function sayHi(userName=`User`, userSurname){
//     let fullName = [userName];
//     if(userSurname) fullName.push(userSurname);

//     console.log(`Hello, ${fullName.join(` `)}!`);
// }

// sayHi(`Anna`, `Shevchenko`);
// sayHi(`Julia`);
// sayHi();
// sayHi(undefined, `Tarasovysh`);

// let users = [`Anna`, `Jack`, `Anton`],
//     animals = [`cat`, `dog`, `lion`];

// function renderList(list, listType=`ul`){
//     // if(!Array.isArray(list)) return;

//     if(Array.isArray(list) && list.length){
//         let LIs = [];
//         for(let j=0; j<list.length; j++){
//             LIs.push(`<li>${list[j]}</li>`)
//         };

//         document.write(`<${listType}>${LIs.join(``)}</${listType}>`);
//     }
// }

// let userListType = prompt(`Choose order or unumerable list?`); //ul, ol
// renderList(users, userListType);

// renderList(animals);

// renderList();

// renderList(`hello`);

// renderList([]);

// return

// function getResult(x, y){
//     let sum = x+y;
//     let kvadrat = Math.pow(sum, 2);

//     return `Result for x: ${x}, y: ${y}. 
//     Sum: ${sum}.
//     Kvadrat: ${kvadrat}`;
// }

// let first = getResult(10,20); // 900
// let second = getResult(100,200); // 90000

// console.log(first);
// console.log(second);

// function sayHi(userName, userSurname){
//     if(userName && userSurname){
//         return `Hello, ${userName} ${userSurname}`;
//     } else if(userName){
//         return `Hello, name - ${userName}`;
//     } else if(userSurname){
//         return `Hello, surname - ${userSurname}`;
//     } else{
//         return `Hello, User`;
//     }

//     // switch(true){
//     //     case userName && userName.length>0 && userSurname && userSurname.length>0:
//     //         return `Hello, ${userName} ${userSurname}`;
//     //     case userName && userName.length>0:
//     //         return `Hello, name - ${userName}`;
//     //     case userSurname && userSurname.length>0:
//     //         return `Hello, surname - ${userSurname}`;
//     //     default:
//     //         return `Hello, User`;
//     // }
// } 

// // let AnnaFedko = sayHi(`Anna`, `Fedko`);
// // console.log(AnnaFedko);

// console.log( sayHi(`Anna`, `Fedko`) );
// console.log( sayHi(`Anna`) );
// console.log( sayHi(undefined, `Fedko`) );
// console.log( sayHi() );

// Lexical environment, Global/Local Scope

// debugger;
// let userName = `Oleg`;

// function foo(x, y=20){
//     debugger;
//     let sum = x+y;
    
//     console.log(sum);
//     console.log(userName);
// }

// foo(10);

// hoisting

// let x = 10; // Global

// function foo(){
//     x++;
//     console.log(`in function: ${x}`); // 11
// }

// foo();

// console.log(`out of function: ${x}`); // 11

// let x = 10;

// function f1(x){ // LE: x, f2
//     x++;
//     console.log(`in f1: ${x}`); // 11

//     f2(x); // 11

//     console.log(`in f1 after f2: ${x}`); // 11
// }

// function f2(){
//     x++;
//     console.log(`in f2: ${x}`); // 11
// }

// f1(x);
// f2();

// console.log(`out of f1: ${x}`); // 11

// closure
// let x = 10;

// function f1(x){ // 10
//     x++; // 11
//     f2();
//     f3(10);
// }

// function f2(){
//     let y = 10;
//     x++; // 10
//     f3(y);
// }

// function f3(y){
//     x++;
//     y++; // is not defined
// }

// f1(x);

// arguments
// function as argument
// callback
// spread/rest in function
// arrow function
// recursion
// setTimeout
// setInterval/clearInterval

// Array methods
// forEach
// filter
// map
// find/findIndex
// every/some
// reduce