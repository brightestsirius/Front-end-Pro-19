// Static methods

// class User{
//     constructor(user){
//         Object.assign(this, user);
//     }

//     static sayHi(){
//         return `Hello, user!`;
//     }

//     sayHi(){
//         return `Hello, ${this.name}!`;
//     }
// }

// class Student extends User{
//     constructor(){
//         super();
//     }

//     static sayHi(){
//         return super.sayHi() + ` I'm student!`;
//     }
// }

// let Oleg = {
//     name: `Oleg`,
//     country: `Ukraine`
// }

// Oleg = new User(Oleg);
// console.log(Oleg);

// console.log(Oleg.sayHi());
// console.log(User.sayHi());

// console.log(Student.sayHi());

// class Date{
//     static getMonthName(monthIndex){
//         let monthNames = []
//         return monthNames[monthIndex];
//     }
// }

// Date.getMonthName( new Date().getMonth() );

// get/set

// class User{
//     constructor(user){
//         Object.assign(this, user);
//     }

//     getFullInfo(){
//         return `Name: ${this.name}. Country: ${this.country}`;
//     }

//     getCountry(){
//         return this.country ? this.country : `Ukraine`;
//     }

//     setCountry(value){
//         this.country = value;
//     }
// }

// let Oleg = new User( {name: `Oleg`} );
// console.log(Oleg);

// console.log(Oleg.getCountry());
// Oleg.setCountry(`Poland`);

// console.log(Oleg);
// console.log(Oleg.getCountry());

// class User{
//     constructor(user){
//         Object.assign(this, user);
//     }

//     get country(){
//         return this.userCountry ? this.userCountry : `Ukraine`;
//     }

//     set country(value){
//         this.userCountry = value;
//     }

//     get fullCountryInfo(){
//         return this.countryInfo ? this.countryInfo : this.country;
//     }

//     set fullCountryInfo(info){
//         let country = info[0],
//             city = info[1],
//             zipCode = info[3];

//         this.countryInfo = `Country: ${country}. City: ${city}. Zip code: ${zipCode}`;
//     }
// }

// let Oleg = new User( {name: `Oleg`} );
// console.log(Oleg);

// console.log( Oleg.fullCountryInfo );
// Oleg.fullCountryInfo = [`Poland`, `Warsaw`, 012345]
// console.log( Oleg.fullCountryInfo );

// this in arrow function

// const getAge = user => `I'm ${user.age} year old.`; // this = window.age => undefined

// function getAge(){
//     return `I'm ${this.age} year old.`;
// }

// const getName = () => `My name is ${this.name}.`; // window.name = ``

// let Oleg = {
//     name: `Oleg`,
//     age: 23,
//     getAge,
//     getName
// }

// console.log( getName(Oleg) );
// console.log( Oleg.getAge() );

// class User{
//     constructor(user){
//         Object.assign(this, user)
//     };

//     getAnimals(){
//         //console.log(this); // Oleg
//         // let name = this.name; // Oleg

//         this.animals
//             .forEach(animal => console.log(`${this.name} has ${animal}.`))
//     }
// }

// let Oleg = new User({
//     name: `Oleg`,
//     animals: [`cat`, `dog`, `lion`]
// })

// console.log(Oleg);

// Oleg.getAnimals();

// call/apply/bind

// let Oleg = {
//     name: `Oleg`,
//     age: 23,
//     city: `Kiev`,
//     getName(sign, zipCode, city){
//         return `My name is ${this.name}. ${Oleg.getCity.call(this, city)}. Zip code: ${zipCode}. ${sign}`;
//     },
//     getCity(city){
//         return `City: ${this.city ? this.city : city}`;
//     },
//     getAge(city, country){
//         return `My age: ${this.age}. City: ${city}. Country: ${country}.`;
//     }
// }

// let Anna = {
//     name: `Anna`,
//     age: 30
// }

// console.log( Oleg.getName(`!`, 12345) );
// console.log( Oleg.getName.call(Anna, `???`, 789488, `London`) );
// console.log( Oleg.getName.apply(Anna, [`???`, 789488, `London`]) );

// let annaGetAge = Oleg.getAge.bind(Anna, `London`);
// console.log( annaGetAge(`Ukraine`) );

// function sendUserEmail(){
//     this.send();
// }

// button.click = BUTTON_ACTION.sendUserEmail.bind(Anna);

// Object.defineProperty()

// const user = {
//     name: `Anna`,
//     age: 23
// }

// Object.defineProperty(user, `name`, 
//     {
//         configurable: false,
//         writable: false,
//         value: `Pumba`,
//         enumerable: false
//     }
// )

// user.name = `Simba`;

// for(let key in user){
//     console.log(key);
// }

// console.log(user);

// const user = {
//     name: `Anna`,
//     age: 23
// }

// Object.defineProperties(user , {
//     name: {
//         enumerable: false
//     },
//     age: {
//         writable: false
//     }
// })

// user.name = `Oleg`;
// user.age = 40;

// console.log(user);

// class User{
//     constructor(user){
//         Object.assign(this, user);

//         for(let key in this){
//             Object.defineProperty(this, key, {configurable: false});
//         }
//     }
// }

// let Oleg = new User({
//     name: `Oleg`,
//     age: 23
// });

// delete Oleg.name;
// console.log(Oleg);

// let user = {};
// Object.defineProperty(user, `name`, {value: `Oleg`, enumerable: true});
// console.log(user);

// let colors = [`yellow`, `blue`];
// Object.defineProperty(colors, 0, {enumerable: false});

// Object.defineProperty(colors, `length_my`, {value: `hello`});

// console.log(colors);

// for(let key in colors){
//     console.log(colors[key]);
// }

// console.log(`----`);

// colors.forEach(color => console.log(color));

// Destructuring assignment

// Приватні та захищені властивості та методи
// Міксини
// Патерни проектування
// Typescript

// DOM