// events

// const block = document.querySelector(`#block`);
// const circle = document.querySelector(`#circle`);

// const onClickFunc = () => console.log(`click`);
// block.onclick = onClickFunc;

// const toggleActiveClass = e => {
//     if(e.target.classList.contains(`active`)){
//         e.target.classList.remove(`active`);
//     } else{
//         e.target.classList.add(`active`);
//     }
// }

// const toggleActiveClass = event => event.target.classList.toggle(`active`);

// block.onclick = toggleActiveClass;
// block.onclick = () => alert(`Hello, world!`);

// block.onclick = event => {
//     toggleActiveClass(event);
//     alert(`Hello, world!`);
// }

// circle.onclick = toggleActiveClass;

// block.addEventListener(`click`, toggleActiveClass);
// block.addEventListener(`click`, () => alert(`Hello, world!`))

// click events
//     onclick

// const block = document.querySelector(`#block`);

// const handler = event => console.log(event.type);

// block.addEventListener(`click`, handler);
// block.addEventListener(`mousedown`, handler);
// block.addEventListener(`mouseup`, handler);

// block.addEventListener(`dblclick`, handler);

// block.addEventListener(`contextmenu`, handler);

//     onmousedown
//     onmouseup
//     ondblclick
//     oncontextmenu

// addEventListener/removeEventListener

// const block = document.querySelector(`#block`);

// const downloadFunc = () => alert(`Downloading...`);

// const redirectToGoogle = () => {
//     window.open(`https://google.com`, `_blank`);
    
//     block.removeEventListener(`click`, redirectToGoogle);
//     block.addEventListener(`click`, downloadFunc);
// }
// block.addEventListener(`click`, redirectToGoogle);

// const clickSecond = () => console.log(`click 2`);

// block.addEventListener(`click`, () => console.log(`click 1`));
// block.addEventListener(`click`, clickSecond);

// block.addEventListener(`mousedown`, () => console.log(`mousedown 1`));
// block.addEventListener(`mouseup`, () => console.log(`mousedown 1`));

// setTimeout(()=>{
//     block.removeEventListener(`click`, clickSecond);
// }, 3000);

// mouse events
//     onmouseover
//     onmouseout
//     onmouseenter
//     onmouseleave
//     onmousemove

// let x, y;
// let activeBlock;

// const mousedownBlock = event => {
//     activeBlock = event.target;
//     activeBlock.classList.add(`active`);

//     x = event.clientX,
//     y = event.clientY;

//     //console.log(event.type, x, y);

//     activeBlock.addEventListener(`mousemove`, movingBlock);

//     document.addEventListener(`mouseup`, movingBlock);
//     document.addEventListener(`mouseup`, () => activeBlock.removeEventListener(`mousemove`, movingBlock));
//     document.addEventListener(`mouseup`, () => activeBlock.classList.remove(`active`));
// }

// const movingBlock = event => {
//     let x_ = event.clientX,
//         y_ = event.clientY;

//     console.log(event.type, x_, y_);

//     let currentBlockLeft = parseInt(activeBlock.style.left),
//         currentBlockTop = parseInt(activeBlock.style.top);

//     let diff_x = x_ - x,
//         diff_y = y_ - y;

//     x = x_;
//     y = y_;

//     activeBlock.style.left = currentBlockLeft + diff_x + `px`;
//     activeBlock.style.top = currentBlockTop + diff_y + `px`;

//     document.removeEventListener(`mouseup`, movingBlock);
// };

// const blocks = document.querySelectorAll(`.block`);
// blocks.forEach(block => {
//     block.style.left = 0;
//     block.style.top = 0;

//     block.addEventListener(`mousedown`, mousedownBlock);
// })

// const handler = event => console.log(event.type);

// block.addEventListener(`mouseover`, handler);
// block.addEventListener(`mouseout`, handler);

// block.addEventListener(`mouseenter`, handler);
// block.addEventListener(`mouseleave`, handler);

// block.addEventListener(`mousemove`, handler);

// Drag & Drop practice

// keyboard events

// document.addEventListener(`keypress`, event => console.log(event));
// document.addEventListener(`keydown`, event => console.log(event));
// document.addEventListener(`keyup`, event => console.log(event));

//     onkeypress
//     onkeydown
//     onkeyup

// keyCode = 38 - ArrowUp
// keyCode = 39 - ArrowRight

// const block = document.querySelector(`#block`);
// const circle = document.querySelector(`#circle`);

// let activeBlock;

// block.addEventListener(`click`, () => activeBlock = block);
// circle.addEventListener(`click`, () => activeBlock = circle);

// const movingRight = block => {
//     block.style.left = `10px`;
// }
// const movingUp = block => {
//     block.style.top = `10px`;
// }

// const EVENTS = {
//     38: block => movingRight(block),
//     39: block => movingUp(block)
// }

// document.addEventListener(`keydown`, event => {
//     activeBlock && EVENTS[event.keyCode] && EVENTS[event.keyCode](activeBlock);
// })

// Bubbling and capturing

// const first = document.querySelector(`.first`);
// const second = document.querySelector(`.second`);
// const third = document.querySelector(`.third`);

// const userClickTrack = () => console.log(`userClickTrack`);

// document.addEventListener(`click`, ()=>{
//     console.log(`click on document`);
//     // userClickTrack();
// })

// first.addEventListener(`click`, event => {
//     // event.stopPropagation();
//     console.log(`first`);
//     // userClickTrack();
// }, true);

// second.addEventListener(`click`, event => {
//     // event.stopPropagation();
//     console.log(`second`);
//     // userClickTrack();
// }, true);

// third.addEventListener(`click`, event => {
//     // event.stopPropagation();
//     console.log(`third`);
//     // userClickTrack();
// });

// stopPropagation

// preventDefault()

const a = document.querySelector(`a`);

a.addEventListener(`click`, event => {
    event.preventDefault();

    let hrefArray = a.href.split(``);
    console.log(hrefArray);

    hrefArray.pop();
    console.log(hrefArray);

    a.href = hrefArray.join(``) + `.ua`;
    console.log(a.href);

    document.location.href = a.href;
});

// const form = document.querySelector(`form`);

// form.addEventListener(`submit`, event => {
//     event.preventDefault();
// })

// localStorage/sessionStorage

// Calendar practice