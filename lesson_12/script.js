// [Country, Flag, Population, Land Area]
// const COUNTRIES = [
//     [`Australia`, `🇦🇺`, 25499884, 7682300],
//     [`Austria`, `🇦🇹`, 9006398, 82409],
//     [`Cambodia`, `🇰🇭` ,16718965, 176520],
//     [`Iceland`, `🇮🇸`, 341243, 100250]
// ];

// const TABLE_THEAD = [`Country`, `Population`, `Land Area`];

// const renderThead = list => {
//     return `<thead>
//         <tr>
//             ${list.map(item => `<th>${item}</th>`).join(``)}
//         </tr>
//     </thead>`;
// };

// const renderTbody = list => {
//     return `<tbody>
//         ${
//             list
//                 .map(country => `<tr>
//                     ${country.map(item => `<td>${item}</td>`).join(``)}
//                 </tr>`)
//                 .join(``)
//         }
//     </tbody>`;
// }

// const getSumOfArray = list => list.reduce((sum, item) => sum+item);

// const countryTable = (thead, data) => {

//     let modifiedCountries = JSON.parse(JSON.stringify(data))
//         .map(country => {
//             // country = [`Iceland`, `🇮🇸`, 341243, 100250]
//             // country = [`🇮🇸 Iceland`, `🇮🇸, 341243, 100250]
//             // country = [`🇮🇸 Iceland`, 341243, 100250]

//             country[0] = `${country[1]} ${country[0]}`;
//             country.splice(1,1);

//             return country;
//         });

//     let populationSum = getSumOfArray(data.map(country => country[2]));
//     let landAreasSum = getSumOfArray(data.map(country => country[3]));

//     let table = `<table>
//         ${renderThead(thead)}
//         ${renderTbody(modifiedCountries)}
//         <tfoot>
//             <tr>
//                 <td></td>
//                 <td>${populationSum}</td>
//                 <td>${landAreasSum}</td>
//             </tr>
//         </tfoot>
//     </table>`;

//     return table;
// }

// document.write( countryTable(TABLE_THEAD, COUNTRIES) );

// Object

// let data = [`Sasha`, `Bogdan`];

// let user = {
//     name: `Sasha`,
//     surname: `Bogdan`,
//     age: 20,
//     cityCountry: [`Kiev`, `Ukraine`],
//     child: {
//         name: `Anna`,
//         age: 7
//     },
//     animals: [
//         {
//             type: `cat`,
//             name: `Anfisa`
//         },
//         {
//             type: `dog`,
//             name: `Sharik`
//         }
//     ]
// }

// let user = {
//     name: `Anton`,
//     animals: [`cat`, `dog`],
//     child: {
//         name: `Olesya`
//     },
//     "city country": `Kiev`,
// };

// console.log(user);

// console.log(user.name);
// console.log(user.animals[1]);
// console.log(user.child.name);
// console.log(user["city country"]);

// const user = {
//     name: `Anton`
// }
// console.log(user);

// user.name = `Anna`;
// user.age = 30;

// delete user.name;

// let user = {
//     name: `Anton`,
//     age: 13,
//     country: `Ukraine`
// }

// for(let key in user){
//     document.write(`<p>${key} : ${user[key]}</p>`)
// }

// let keys = Object.keys(user);
// console.log(keys); // ['name', 'age', 'country']

// keys
//     .forEach(key => document.write(`<p>${key} : ${user[key]}</p>`))

// let options = Object.entries(user);
// console.log(options);

// options
//     .forEach(item => document.write(`<p>${item.join(`: `)}</p>`))

// let arr = [`cat`, `dog`, `lion`];

// for(let key in arr){
//     console.log(key, arr[key]);
// }

// for(let key of arr){
//     console.log(key);
// }

// Object.keys
// Object.assign()

// let cat = {
//     type: `cat`,
//     name: `Anfisa`
// };

// let dog = {
//     type: `dog`,
//     name: `Simba`,
//     age: 7
// };


// let catDog = {};

// for(let key in cat){
//     catDog[key] = cat[key]; // catDog[type] = `cat`
// }

// console.log(catDog);

// for(let key in dog){
//     if(!catDog[key]){
//         catDog[key] = dog[key];
//     } else{
//         catDog[key] += ` ${dog[key]}`
//     }
// }

// console.log(catDog);

// let user_1 = {
//     age: 10,
//     child: {
//         name: `Oleg`
//     }
// }

// let user_2 = {
//     name: `Atrhur`,
//     age: 15,
//     child: {
//         surname: `Tarasovysch`
//     }
// }

// let user = {
//     user_1,
//     user_2
// }

// let newUser = Object.assign({}, user_1, user_2, {surname: `Franko`});

// console.log(newUser);
// console.log(user_2);

// let arr = [10,20,30];
// console.log(typeof arr, Array.isArray(arr)); // object

// let user = {
//     name: `Oleg`
// }
// console.log(typeof user, Array.isArray(user)); // object

// function getFullName(){
//     console.log(this);
//     return `Hello, ${this.name} ${this.surname}`;
// }

let Oleg = {
    name: `Oleg`,
    surname: `Filatov`,
    yearOfBirth: 1990, 
    getFullName(){
        return `Hello, ${this.name} ${this.surname}`;
    },
    getAge(){
        let currentYear = new Date().getFullYear();
        return `I'm ${currentYear - this.yearOfBirth} years old.`
    },
    uniqueOlegFunc(){
        return `privetik, I'm Oleg!`
    }
}

// console.log( Oleg.getFullName() );
// console.log( Oleg.getAge() );

// console.log(`-----`);

let Anna = {
    name: `Anna`,
    surname: `Franko`,
    yearOfBirth: 1970, 
    getFullName(){
        return `Hello, ${this.name} ${this.surname}.`;
    },
    getAge(){
        let currentYear = new Date().getFullYear();
        return `I'm ${currentYear - this.yearOfBirth} years old.`
    },
    getInfo(){
        console.log( Oleg.uniqueOlegFunc() );
        return [this.getFullName(), this.getAge()].join(` `);
    }
}

console.log( Anna.getFullName() );
// console.log( Anna.getAge() );

console.log( Anna.getInfo() );

// console.log( getFullName() );


// this

// Prototype

// Object.create
// function-constructor
// Class