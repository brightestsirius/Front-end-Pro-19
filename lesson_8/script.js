// min/max element in array by index
// change position of min/max

// let arr = [10, 7, -10, 100, 200, 3];
// console.log(arr);

// min = -10; //arr[2] 
// max = 200; //arr[4]
// arr = [10, 7, 200, 100, -10, 3];

// let minIndex=maxIndex=0;

// for(let i=1; i<arr.length; i++){
//     if(arr[i]<arr[minIndex]) minIndex = i;
//     if(arr[i]>arr[maxIndex]) maxIndex = i;
// }

// console.log(`Index of min element: ${minIndex}. Min element: ${arr[minIndex]}`);
// console.log(`Index of max element: ${maxIndex}. Max element: ${arr[maxIndex]}`);

// let tempValue = arr[maxIndex];
// arr[maxIndex] = arr[minIndex];
// arr[minIndex] = tempValue;

// console.log(arr);
// [10, 7, 200, 100, -10, 3];

// Copy of array

// let arr = [10,20,30, 'hello', true, null, undefined];
// let arr2 = [];

// for(let i=0; i<arr.length; i++){
//     arr2[i] = arr[i];
// }

// arr2[0] = `cat`;

// console.log(arr);
// console.log(arr2);

// let arr = [10,20,30,40,50,true,false];
// let arr2 = [`cat`, `dog`, `lion`]; // 2 => 3 === arr.length

// for(let i=0; i<arr.length; i++){
//     arr2[arr.length] = arr[i];
// }

// console.log(arr);
// console.log(arr2);

// Array methods
//     push

// let arr = [10,20,30,40,50,60]; // 6
// arr.length = 60;
// arr.push(40, 50, 'hello', true);
// arr.unshift(`cat`, `dog`, true);
// arr.shift();

// console.log(arr.push(`cat`, `dog`)); // 8
// console.log(arr.unshift(`cat`, `dog`, true));

// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr);

//     pop
//     shift
//     unshift
//     join

// let arr = [10,20,30];

// let string = arr.join(`__AAA__`);

// console.log(arr);
// console.log(string);

// let animals = [`cat`, `dog`, `lion`];
// let LIs = ``;

// for(let i=0; i<animals.length; i++){
//     LIs += `<li>${animals[i]}</li>`;
// }

// document.write(`<ul>${LIs}</ul>`);

// let animals = [`cat`, `dog`, `lion`];
// document.write(`<ul><li>${animals.join(`</li><li>`)}</li></ul>`);

// let arr = [`<li>cat</li>`, `<li>dog</li>`, `<li>lion</li>`];
// document.write(`<ul>${arr.join(``)}</ul>`);

// Chess board

// const figures = [`rook`, `horse`, `bishop`, `king`, `queen`, `bishop`, `horse`, `rook`];

// let TRs = [];

// for(let tr=8; tr>=1; tr--){
//     let TDs = [];

//     let color = tr===1 || tr===2 ? `white` : `black`;

//     for(let td=0; td<8; td++){
//         let element = ``;

//         if(tr === 2 || tr===7){
//             element = `<img src="chess/${color}/pawn.svg" width="30" height="30">`
//         }

//         if(tr === 1 || tr === 8){
//             element = `<img src="chess/${color}/${figures[td]}.svg" width="30" height="30">`;
//         }

//         TDs.push(`<td>${element}</td>`);
//     }

//     TRs.push(`<tr>
//         <td>${tr}</td>
//         ${TDs.join(``)}
//         <td>${tr}</td>
//     </tr>`);
// }

// console.log(TRs);

// const alphabet = `abcdefgh`;
// let TDsAlphabet = [];

// for(let i=0; i<alphabet.length; i++){
//     TDsAlphabet.push(`<td>${alphabet[i]}</td>`);
// }
// console.log(TDsAlphabet);

// let TrAlphabet = `<tr>
//     <td></td>
//     ${TDsAlphabet.join(``)}
//     <td></td>
// </tr>`;

// document.write(`<table>
//     ${TrAlphabet}
//     ${TRs.join(``)}
//     ${TrAlphabet}
// </table>`);

//     reverse

// let arr = [10,20,30,40,50,60];
// arr.reverse();

// console.log(arr);

//     concat

// let arr1 = [10,20,30];
// let arr2 = [`cat`, `dog`];
// let arr3 = [true, false];

// let result = arr1.concat(arr2, arr3, [100,200]);

// console.log(arr1);
// console.log(result);

//     slice

// let arr = [10,20,30,40,50,60];

// let arr2 = arr.slice(0, -2);

// // arr2[0] = `cat`;

// console.log(arr);
// console.log(arr2);

//     splice

// let arr = [10,20,30,40,50,60]; // 20,'cat',30
// arr.splice(1, 3, `cat`, `dog`, 100000, true);
// console.log(arr);

// let arr = [10,20,30,40,50,60];
// console.log(arr.splice(1,3));
// console.log(arr);

//     split
// let str = "cat dog lion red black";
// let arr = str.split(` `);
// console.log(arr);

let figures = [`rook`, `horse`, `bishop`, `king`, `queen`];

// const copiedFigures = figures.slice(0,3); // [`rook`, `horse`, `bishop`]
// console.log(copiedFigures);

// copiedFigures.reverse(); // [`bishop`, `horse`, `rook`]

// figures = figures.concat(copiedFigures);

// console.log(figures);

// let copiedFigures = figures
//     .slice(0,3) // [`rook`, `horse`, `bishop`]
//     .reverse() // [`bishop`, `horse`, `rook`]

// figures = figures.concat(copiedFigures); // [`rook`, `horse`, `bishop`, `king`, `queen`, `bishop`, `horse`, `rook`]

// console.log(figures);

// Two dimensional array

// let arr = [10, 'cat', true, [10,[`HORSE`, `LION`],30], `dog`];
// console.log(arr);

// console.log(arr[3][1][1]);

// let arr = [10, [100,200,300,[500,600,700]]];

// let arr2 = JSON.parse( JSON.stringify(arr) );
// console.log(arr2);


// let x = 10;
// let y = JSON.parse( JSON.stringify(x) );

// console.log(x, y);

// arr2[0] = `CAT`;
// arr2[1][0] = `DOG`;

// console.log(arr);
// console.log(arr2);

// Array.isArray(...);
// typeof arr; // "object"

// let arr = [10,20,30];
// arr = 10;

// console.log( Array.isArray(arr) ); // true