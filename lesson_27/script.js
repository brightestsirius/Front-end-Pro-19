// JS Modules

// import {User, deafultUserName} from './components/User.js';
// import * as UserFile from './components/User.js';

// console.log(UserFile);

// console.log(UserFile.deafultUserName);

// let scriptDefaultUserName = UserFile.deafultUserName;
// scriptDefaultUserName = `Jack`;
// console.log(scriptDefaultUserName);

// let Jack = new UserFile.User({name: `Jack`});
// console.log(Jack);
// console.log(Jack.getInfo());

// console.log(UserFile.firstFunc(10));

// let Jack = new User({name: `Jack`});
// console.log(Jack.getInfo());

// console.log(deafultUserName);

// import {User} from './components/User.js';
// import {users as myUsers, ROLES} from './components/variablesUsers.js';

// myUsers
//     .map(item => ROLES[item.role] ? ROLES[item.role](item) : new User(item))
//     .forEach(item => console.log(item.getInfo()));

// JQuery
    // selectors

// const block = document.querySelector(`.block`);
// const blockJQ = $(`.block`); // [0]

// console.log(block);
// console.log(blockJQ);

// const blocks = document.querySelectorAll(`.block:first-of-type`);
// const blocksJQ = $(`.block:first-of-type`);

// console.log(blocks);
// console.log(blocksJQ);

// // blocks.forEach(item => item.style.background = `blue`);

// blocksJQ.css(`background`, `green`);

    // css

// const blocksJQ = $(`.block`);
// // blocksJQ.css(`border-radius`, `10px`);

// blocksJQ.css({
//     'background': 'blue',
//     'border-radius' : '10px'
// });

// const blocksJQ = $(`.block`);

    // each((index, block)=>{})

// blocksJQ.each(
//     function(index, item){
//         //console.log(item);
//         if(index === 1){
//             $(item).css(`background`, `blue`);
//             //item.style.background = `blue`;
//         }
//     }
// )

// addClass, removeClass, toggleClass

// const blocksJQ = $(`.block:first-of-type`);
// setInterval(() => blocksJQ.toggleClass(`active`), 500);

    // tree

// const blocksJQ = $(`.block:nth-child(2)`); // [0]
// blocksJQ.addClass(`active`);

// // blocksJQ.prev().addClass(`active`);
// // blocksJQ.next().addClass(`active`);

// blocksJQ.siblings().addClass(`active`);
// blocksJQ.parents(`article`).addClass(`active`);

// console.dir(blocksJQ[0]);
// $(blocksJQ[0].previousElementSibling).addClass(`active`);

// const blocksJQ = $(`.block:nth-child(2)`);
// blocksJQ.html(`<h2>Hello</h2>`);

// blocksJQ.wrap(`section`);
// blocksJQ.unwrap();

    // text()/html()
    // prepend()/append()
    // before()/after()
    // wrap()/unwrap()
    // empty(), remove(), clone()

// const blocksJQ = $(`.block`);
// blocksJQ.on(`click`, e => console.log(e));

// actions/on
// animation
// hide/show/toggle

// const blockJQ = $(`.block`);
// const hideBtn = $(`#hide`);
// const showBtn = $(`#show`);
// const toggleBtn = $(`#toggle`);

// hideBtn.on(`click`, () => {
//     blockJQ.hide();
// })

// showBtn.on(`click`, () => {
//     blockJQ.show();
// })

// toggleBtn.on(`click`, () => {
//     blockJQ.toggle();
// })

// fadeIn()/fadeOut()/fadeToggle()
// slideUp()/slideDown()/slideToggle(3000)

// Ajax

// const URL = `https://jsonplaceholder.typicode.com/posts`;

// $.ajax({
// 	url : URL,
// 	method: 'GET',
// 	success: data => {
//         console.log(data);
        
//         let centralPost = Math.floor(data.length/2);
//         $.ajax({
//             url: URL+`/${centralPost}`,
//             method: 'GET',
//             success: centralPost => console.log(centralPost),
//             error: error => console.log(error)
//         })
//     },
// 	error: error => console.log(error)
// })

// або
// $.ajax({
// 		url : URL,
// 		method: 'GET',
//         error: error => {
//             console.log(`in catch:`, error);
//         }
// 	})
// 	.done(data => {
// 		console.log(`in resolve 1:`, data);
//         return data;
// 	})
//     .done(data => {
// 		console.log(`in resolve 2:`, data);
// 	});

// POST
// $.ajax({
// 	url: URL,
// 	type: "POST",
// 	dataType: "JSON",
// 	data: {
//         title: "New title"
//     },
// 	success: function (data) {
//         console.log(data);
// 	},
// 	error: error => {
// 		console.log(error);
// 	}
// });

// owl carousel
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// });

// function* foo(value){
//     value *= 10
//     yield value;
//     value *= 20;
//     yield value;
//     value *= 30;
//     return value*30;
// }

// foo(10);
// foo(20);
// foo(30);

// NodeJS
// http
    // require()
    // module.exports = {}

// let {Oleg:x, foo, y=20} = require(`./variables.js`);

// npm
// gulp/Webpack
// gulp-file-include