// Prototype

// Object.prototype.hello = `Hello, world!`;

// let user = {
//     name: `Oleg`
// }

// console.log(user.hello);

// let arr = [10,20,30];

// console.log(arr.hello);

// let x = 10;

// console.log(x.hello);

// Array.prototype.friday = `friday`;
// console.log(arr.friday);

// console.log(x.friday);

// let arr = [10,20,30];
// // arr.push(100,200);

// Array.prototype.myPush = function(...args){
//     // console.log(args); // [300,400]
//     // console.log(this);

//     for(let i=0; i<args.length; i++){
//         this[this.length] = args[i];
//     }

//     return this.length;
// }

// arr.myPush(300,400);

// console.log(arr);
// console.log( arr.myPush('hello', 'cat') );

// Array.prototype.myPush = function(...args){
//     for(let i=0; i<args.length; i++){
//         this[this.length] = args[i]+100;
//     }

// }

// let arr = [10,20,30];
// arr.push(10,20);

// console.log(arr);

// Object.create

// let did = {
//     country: `Ukraine`
// }

// let parent = Object.create(did);
// parent.name = `Taras`,
// parent.surname = `Shevchenko`,
// parent.getInfo = function(){
//     return `Hello, ${this.name} ${this.surname}. I'm from ${this.country}.`;
// }

// let child = Object.create(parent);
// child.age = 7;
// child.country = `Poland`;
// child.name = `Oleg`;

// console.log(child);
// console.log(child.getInfo());

// let User = {
//     login(){
//         return `Hello, ${this.name}. You are ${this.type}`
//     } 
// }

// let Student = Object.create(User);
// Student.name = `Anna`;
// Student.type = `Student`;

// let Admin = Object.create(User);
// Admin.name = `Ivan`;
// Admin.type = `Admin`;

// let Lector = Object.create(User);
// Lector.name = `Sasha`;
// Lector.type = `Lector`;

// let Cat = {
//     login(){
//         return `Myu, ${this.name}. You are kotik ${this.type}`
//     } 
// }

// let Anfisa = Object.create(Cat);
// Anfisa.name = `Anfisa`;
// Anfisa.type = `siam`;

// let users = [Student, Admin, Lector, Anfisa];

// users.forEach(user => console.log(user.login()));

// let User = {
//     login(){
//         return `Hello, ${this.name}. You are ${this.type}`
//     } 
// }

// let users = [
//     {
//         name: `Anna`,
//         type: `Lector`
//     },
//     {
//         name: `Oleg`,
//         type: `Student`
//     },
//     {
//         name: `Sasha`,
//         type: `Admin`
//     }
// ];

// users
//     .map(user => {
//         let newUser = Object.create(User); // {}
//         Object.assign(newUser, user);

//         return newUser;
//     })
//     .forEach(user => console.log(user.login()))


// Function-constructor

// function User(name, type, country=`Ukraine`) {
//     this.name = name;
//     this.type = type;
//     this.country = country;
// }

// User.prototype.login = function(){
//     return `Hello, ${this.name}. You are ${this.type}. Course: ${this.courseName}.`
// }
// User.prototype.courseName = `Hillel`;

// let Oleg = new User(`Oleg`, `student`); // {}.User(`Oleg`, `student`)
// let Anna = new User(`Anna`, `admin`, `Poland`); // {}
// let Sasha = new User(`Sasha`, `lector`);

// console.log(Oleg);
// console.log(Anna);
// console.log(Sasha);

// let users = [Oleg, Anna, Sasha];

// users.forEach(user => console.log(user.login()));

// const Did = {
//     country: `Ukraine`
// }

// function Parent(name){
//     this.name = name;
// }

// Parent.prototype = Object.create(Did);
// Parent.prototype.city = `Kiev`;

// let Mama = new Parent(`Mama`); // {}
// let BratMama = new Parent(`BratMama`);

// console.log(Mama);
// console.log(BratMama);

// Class

// function User(name, type){
//     this.name = name;
//     this.type = type;
// }
// User.prototype

class Did{
    constructor(){
        this.country = `Ukraine`
    }

    getCountry(){
        return `Yours country: ${this.country}`;
    }
}
// Did.prototype.country = `Ukraine`;

// let DidIvan = new Did();
// console.log(DidIvan);
// console.log(DidIvan.getCountry());

// class User extends Did{
//     constructor(name, type){
//         super();
        
//         this.name = name;
//         this.type = type;
//     }

//     login(){
//         return `Hello, ${this.name}. You are ${this.type}. Course: ${this.courseName}.`
//     }
// }

// let Oleg = new User(`Oleg`, `student`); // {}
// console.log(Oleg);

// let Anna = new User(`Anna`, `admin`); // {}
// console.log(Anna);

class Bicycle{
    constructor(gear=5){
        this.gear = gear;
    }

    braking() {
        console.log(`braking`);
    }
}

let sportsBicycle = new Bicycle(4); // {}
let sportsBicycle_2 = new Bicycle(); // {}

console.log(sportsBicycle);
console.log(sportsBicycle_2);

console.log(sportsBicycle.gear);
sportsBicycle.braking();