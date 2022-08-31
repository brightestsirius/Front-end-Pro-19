// HW

// const root = document.querySelector(`ul#root`);

// const setFirstItemClassByLevel = (ul, level) => {
//     level--; // 0

//     if(level>0){
//         const LIs = [...ul.children]; // HTMLCollection => Array
//         console.log(LIs);
    
//         LIs.forEach(li => {
//             // console.dir(li);
    
//             let InnerULs = [...li.children]; // HTMLCollection => Array
//             // console.log(InnerULs);
    
//             InnerULs.forEach(innerUl => setFirstItemClassByLevel(innerUl, level));
//         })
//     } else{
//         let LiFirst = ul.querySelector(`li:first-of-type`);
//         LiFirst.classList.add(`first`);
//     }
// }

// setFirstItemClassByLevel(root, 4);

// const setFirstItemClass = ul => {
//     let LIs = ul.querySelectorAll(`li:first-of-type`);
//     LIs.forEach(li => li.classList.add(`first`));
// }
// setFirstItemClass(root);

// createElement

// const left = document.querySelector(`#left`);

// const heading = document.createElement(`h1`);
// heading.innerHTML = `<em>Hello, world</em>`;
// // heading.classList.add(`first`, `second`);
// heading.className = `first second`;

// const headingAppend = heading.cloneNode(true);
// headingAppend.innerHTML = `Second h1`;

// console.dir(heading);

// left.prepend(heading);
// left.append(headingAppend);

// left.innerHTML = `<h1>Hello, world</h1>${left.innerHTML}`;

// const dog = document.querySelector(`#dog`);
// dog.style.backgroundColor = `red`;

// if(dog.style.backgroundColor === `green`)
//     dog.style.color = `white`;

// console.dir(dog);

// let modeColor = prompt(`Enter mode color`);

// const body = document.querySelector(`body`);
// body.classList.add(modeColor);

// body.style.backgroundColor = modeColor;
// const links = document.querySelectorAll(`a`);

// switch(modeColor){
//     case `black`:
//         body.style.color = `white`;
//         links.forEach(a => a.style.color = `pink`);
//         break;
//     case `green`:
//         body.style.color = `white`;
//         links.forEach(a => a.style.color = `orange`);
//         break;
// }

// const h1 = document.querySelector(`h1`);
// h1.insertAdjacentHTML(`afterend`, `<h2>H2 heading</h2>`);

// let h2 = document.createElement(`h2`);
// h2.innerHTML = `H2 heading`;

// h1.insertAdjacentElement(`afterend`, h2);

// insertAdjacentHTML

// remove

// const body = document.querySelector(`body`);
// const h1 = document.querySelector(`h1`);

// setTimeout(()=>h1.remove(), 1000);
// setTimeout(() => {
//     h1.innerHTML += `!!!`;
//     body.prepend(h1);
// }, 2000);

const body = document.querySelector(`body`);
console.dir(body);

const mySpan = document.querySelector(`#mySpan`);
mySpan.style.left = 0;
mySpan.style.top = 0;

// setTimeout(() => {
//     mySpan.style.left = `200px`; // parseInt(`200px`) => 200+200 = 400 => `400px`;
// }, 1000);

// setTimeout(() => {
//     mySpan.style.left = (parseInt(mySpan.style.left)+200) + `px`;
// }, 2000);

const movingBlock = setInterval(() => {
    mySpan.style.left = (parseInt(mySpan.style.left)+100) + `px`;
    mySpan.style.top = (parseInt(mySpan.style.top)+100) + `px`;
    //console.log(mySpan.style.left);
}, 1000);

setTimeout(() => clearInterval(movingBlock), 3000);

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