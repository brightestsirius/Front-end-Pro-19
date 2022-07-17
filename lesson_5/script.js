// Prompt email:
    // without whitespace
    // with @, but not at the start/end
    // not equal example@gmail.com
    // Cancel
    // empty string

// let email = prompt(`Enter email`); // h ello

// if(email !== null){
    
//     // if(email.indexOf(` `) > -1){
//     //     console.log(`Not valid email`);
//     // }

//     // let indexOfWhitespace = email.indexOf(` `);
//     // if(indexOfWhitespace > -1){
//     //     console.log(`Not valid email: found whitespce at ${indexOfWhitespace+1} position`);
//     // }

//     if(email.includes(` `)){
//         console.log(`Not valid`);
//     } else if(!email.includes(`@`)){
//         console.log(`Email not contains symbol @`);
//     }
// }

// while

// let email = prompt(`Enter email`);

// while( email === null 
//     || !email
//     || email.includes(` `) 
//     || email.startsWith(`@`) 
//     || email.endsWith(`@`) 
//     || !email.includes(`@`) 
//     || email===`example@gmail.com`
// ){
//     let errorText = `Error text`;

//     switch(true){
//         case email === null:
//             errorText = `Not click Cancel`;
//             break;
//         case email === ``:
//             errorText = `Empty text`;
//             break;
//         case email.startsWith(`@`):
//             errorText = `Starts with @`;
//             break;
//     }

//     alert(errorText);
//     email = prompt(`Enter email`); // hello
// }

// console.log(`Valid email: ${email}`);

// let x = 0;

// while(x<10){
//     console.log(x); // 9
//     x++;
// }

// console.log(`after loop: ${x}`);

// let email = prompt(`Enter email`);

// while(email === null){
//     alert(`Not valid email`);
//     email = prompt(`Enter email`);
// }

// console.log(email);

// do/while

// let email; // undefined

// do{
//     email = prompt(`Enter email`);
// } while(email === null)

// console.log(email);

// let x = 10;
// while(x>10){
//     console.log(`in loop: ${x}`);
// }

// let x = 10;
// do{
//     console.log(`in loop: ${x}`);
// } while(x>10)

// let     password,
//         tries = 1;

// do{
//     password = prompt(`Tries: ${tries}/3. Enter password.`);
//     tries++;
// } while(tries<=3 && (password === null || password.length < 3 || password.includes(`@`)));

// for
// let x = 1;

// for(; x<=5; x+=3){
//     console.log(x);
// }

// console.log(x);

// sum

let x = 1;
let sum = 0;

for(; x<=3; sum += x, x++){}

// for(; x<=3; x++){
//     sum += x;
// }

console.log(`after loop: ${x}`);
console.log(`sum = ${sum}`);