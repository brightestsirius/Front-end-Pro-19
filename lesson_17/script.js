// Object.getOwnPropertyDescriptor(obj, prop)

// let user = {}
// Object.defineProperty(user, `name`, {enumerable: true});
// console.log(Object.getOwnPropertyDescriptor(user, `name`));


// Object.defineProperty (get, set)
// let user = {};

// Object.defineProperty(user, `country`, {
//     get(){
//         return this.userCountry ? this.userCountry : `Ukraine`
//     },
//     set(value){
//         this.userCountry = value;
//     }
// });

// console.log(user.country);
// user.country = `Poland`;
// console.log(user.country);

// Destructuring assignment

// let user = {
//     name: `Jack`,
//     age: 30,
//     animals: [`cat`, `dog`, `lion`],
//     child: {
//         type: `boy`,
//         name: `Artem`
//     }
// }

// function getUserName( {name:userName=`Anna`, child:{name:userChildName}={} } = {} ){
//     console.log(userName);
//     console.log(userChildName);
// }

// // getUserName(user);
// // getUserName();

// let users = [
//     user,
//     {
//         name: `Oleksiy`
//     }
// ]

// users.forEach(user => getUserName(user));


// let colors = [`red`, `green`, `blue`];
// let [redColor, green, blue] = colors;

// console.log(blue);

// let JackChildName = user.child.name;

// let {name:JackName, child, child:{name:JackChildName, type}, animals:[JackCat, JackDog, JackParrot=`parrot`], animals:JackAnimals, country:JackCountry=`Ukraine` } = JSON.parse(JSON.stringify(user));

// console.log(JackName);
// console.log(child);
// console.log(JackChildName);
// console.log(type);
// console.log(JackCat);
// console.log(JackDog);
// console.log(JackAnimals);

// console.log(JackCountry);
// console.log(JackParrot);

// const React = {
//     render(){
//         return `Hello, React`
//     },
//     reactDOM(){
//         return `Hello, reactDOM`
//     },
//     formatting(){
//         return `formatting`
//     }
// };

// const {render, formatting} = React;

// render();
// formatting();

// DOM

// console.dir(document);
// console.log(document.location.href);

// setTimeout(() => document.location.href = `https://google.com`, 2000);
// window.open(`https://google.com`, `_blank`);

// setTimeout(() => window.open(`https://google.com`, `_blank`),2000);

// alert('Hello');

// console.log(window);

// document
// redirect

// console.dir(document);

// querySelector

// let myH2 = document.querySelector(`h2`);
// console.dir(myH2);

// let allH2 = document.querySelectorAll(`h2`);
// console.log(allH2);

// allH2.forEach(item => console.log(item.innerHTML));

// let h2First = document.querySelector(`h2`);
// console.dir(h2First);

// h2First.innerHTML = `<b>Simba!</b>`;

const h1 = document.querySelector(`#heading_1`);
console.dir(h1);

// h1.className += ` third`;
// h1.className = h1.className.replace(` second`, ``);

// console.dir(h1);

// h1.classList.add(`third`, `fourth`);
// h1.classList.remove(`second`);

// console.log( h1.classList.contains(`thirds`) ); //true/false

// h1.setAttribute(`name`, `product`);
// console.log(h1.getAttribute(`name`));

// const p = document.querySelector(`p`);
// // p.setAttribute(`data-sale`, true);

// p.dataset.sale = true;
// console.log(p.dataset);

// console.dir(p);

let allLastLi = document.querySelectorAll(`li:last-of-type`);
console.log(allLastLi);

allLastLi.forEach(li => li.classList.add(`blue`));

// html
// css
// class
// attributes
// dataset

// createElement
// remove
// events

// click events
//     onclick
//     ondblclick
//     oncontextmenu
//     onmousedown
//     onmouseup

// addEventListener/removeEventListener

// mouse events
//     onmouseover
//     onmouseout
//     onmouseenter
//     onmouseleave
//     onmousemove

// keyboard events
//     onkeypress
//     onkeydown
//     onkeyup

// Bubbling and capturing

// stopPropagation

// preventDeafault()