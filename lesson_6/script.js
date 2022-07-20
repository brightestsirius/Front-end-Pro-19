// 🔴🟠🟡🟢🔵🟣

// const userAnswer = true; // confirm: true/false

// if(userAnswer){
//     let final = ``;
    
//     let countOfWords = 3;
//     // do{
//     //     countOfWords = prompt(`Enter count of numbers: at least 2 and no more 5`);
//     // } while(countOfWords<2 || countOfWords>5)

//     for(let wordNumber=1; wordNumber<=countOfWords; wordNumber++){

//         let word;
//         let wordHasNumber = false;

//         do{
//             word = prompt(`Enter word #${wordNumber}`); // hello
            
//             if(word){
//                 word = word.trim();

//                 wordHasNumber = false;

//                 for(let letter=0; letter<word.length; letter++){ // 0..4

//                     let currentLetter = word[letter], // "h", "5"
//                         convertToNumber = Number(currentLetter), // NaN, 5
//                         letterIsNotNumber = isNaN(convertToNumber); // true, false
                
//                     console.log(currentLetter, convertToNumber, letterIsNotNumber);
                
//                     if(letterIsNotNumber === false){
//                         wordHasNumber = true;
//                     }
//                 }     
//             }       

//         } while(!word || word.toLowerCase() === `hello` || wordHasNumber);

//         final += word;

//         // if(wordNumber === countOfWords) final += `!!!`;
//         // else final += ` `;

//         final += wordNumber === countOfWords ?
//          `!!!` 
//          : ` `;
//     }

//     console.log(final); // "dogcatlion"
// }

// inline conditions
// ternary operator

// let number = 10;

// number > 0 ? 
//     number > 5 ? console.log(`more then 5`) : console.log(`less then 5`)
//     : number > -5 ? console.log(`more then -5`) : console.log(`less then -5`)

// let number = 10;
// number>0 && number>5 && number>7 && console.log(`more then 7`)

// isNaN()
// let x = +"10hello";
// console.log(x); // NaN

// if(isNaN(x)){
//     console.log(`x is NaN`);
// } else{
//     console.log(`x is not NaN`);
// }

// let word = `h5r`;
// let wordHasNumber = false;

// // console.log(word.length); // 5
// // console.log(word[0]);
// // console.log(word[100]); // undefined

// for(let letter=0; letter<word.length; letter++){ // 0..4

//     let currentLetter = word[letter], // "h", "5"
//         convertToNumber = Number(currentLetter), // NaN, 5
//         letterIsNotNumber = isNaN(convertToNumber); // true, false

//     console.log(currentLetter, convertToNumber, letterIsNotNumber);

//     if(letterIsNotNumber === false){
//         wordHasNumber = true;
//     }
// }

// console.log(`Word ${word} ${wordHasNumber ? `has` : `has not`} number`);

// iterate over the string

// let str = `hello`; // he🟡🔵o
// let newStr = ``;

// for(let i=0; i<str.length; i++){
//     let letter = str[i]; // h
//     let nextLetter = str[i+1];
    
//     console.log(letter, nextLetter);

//     if(letter === nextLetter){
//         newStr += `🟡🔵`;
//         i++;
//     } else{
//         newStr += letter;
//     }
// }

// console.log(newStr); // he🟡🔵lo

// break; continue

// let courseName = `Front-end`;

// for(let i=0; i<courseName.length; i++){
//     let letter = courseName[i];

//     if(letter === `-`) continue;

//     console.log(letter);
// }

// let x = 5;

// while(x>0){
//     console.log(x); // 3
//     if(x === 3) break;
//     x--;
// }

// 1
//     1
// 2
//     1
//     2
// 3
//     1
//     2
//     3

// toStart: for(let i=1; i<=5; i++){
//     console.log(i); // 5

//     for(let j=1; j<=i; j++){
//         if(j===3) continue toStart;
//         console.log(`   `, j);
//     }

//     console.log(`----`);
// }

let str = `hel3lo`;
let stringHasNumber = false;

for(let i=0; i<str.length; i++){
    let letter = str[i]; // "a", "3"

    let letterToNumber = Number(letter); // "a" => NaN, 3 => 3

    // typeof NaN => number
    // typeof 3 => number

    let letterIsNaN = isNaN(letterToNumber); // a=true; 3=false

    console.log(letter, letterToNumber, letterIsNaN);

    if(letterIsNaN === false){
        stringHasNumber = true;
        break;
    }
}

console.log(`String <${str}> ${stringHasNumber ? `has` : `has not`} a number`);

// factorial

// pure number
// %

// Array

// Array methods
    // push
    // pop
    // shift
    // unshift
    // reverse
    // concat
    // slice
    // splice
    // join
    // split
    // indexOf

// Function

// Lexical environment

// Scope