// Form events

// input[type="text"], textarea

// const userName = document.querySelector(`#userName`);
// console.log(userName.value);

// userName.addEventListener(`input`, event => {
//     console.log(event.data, event.target.value);
// })

// userName.addEventListener(`change`, event => {
//     console.log(event.target.value);
// })

// const userMessage = document.querySelector(`#userMessage`);
// console.log(userMessage.value);

// userMessage.addEventListener(`input`, event => {
//     console.log(event.target.value);
// })

// checkbox, radio, color

// const TShirts = document.querySelectorAll(`input[name="t-shirt"]:checked`);
// console.log(TShirts); // NodeList [input, input];

// let TShirtsColors = [...TShirts].map(item => item.value);
// console.log(TShirtsColors);

// const redTShirt = document.querySelector(`input[name="t-shirt"][value="Red"]`);
// console.dir(redTShirt.checked);

// checkbox

// const tShirts = [...document.querySelectorAll(`input[name="t-shirt"]`)];
// console.log(tShirts);

// const tShirtsChecked = tShirts.filter(input => input.checked);
// console.log(tShirtsChecked);

// const getCheckedColors = arr => arr.map(item => item.value);
// console.log(getCheckedColors(tShirtsChecked));

// tShirts.forEach(input => {
//     input.addEventListener(`change`, event => {
//         let isChecked = event.target.checked;
//         if(isChecked){
//             tShirtsChecked.push(event.target);
//         } else{
//             let indexOfInput = tShirtsChecked.indexOf(event.target);
//             tShirtsChecked.splice(indexOfInput,1);
//         }
//         console.log(getCheckedColors(tShirtsChecked));
//     })
// })

// radio
// const checkedInput = document.querySelector(`input[name="t-shirt"]:checked`);

// let checkedColor = checkedInput.value;
// console.log(checkedColor);

// const TShirts = document.querySelectorAll(`input[name="t-shirt"]`); // NodeList

// TShirts.forEach(input => {
//     input.addEventListener(`change`, event => {
//         checkedColor = event.target.value;
//         console.log(checkedColor);
//     })
// })

// color

// const colorPicker = document.querySelector(`#colorPicker`);

// colorPicker.addEventListener(`input`, event => {
//     // console.log(event.target.value);
//     document.body.style.background = event.target.value;
// })

// colorPicker.addEventListener(`change`, event => {
//     document.body.style.background = event.target.value;
// })

// const tShirtsChecked = document.querySelectorAll(`input[name="t-shirt"]:checked`);
// console.log(tShirtsChecked);

// const country = document.querySelector(`#country`);
// console.log(country.selectedOptions);

// country.addEventListener(`change`, event => {
//     let selectedOptions = [...event.target.selectedOptions];
//     console.log(selectedOptions.map(option => option.value));
// });

// button

// const btn = document.querySelector(`#btn`);

// btn.addEventListener(`click`, () => console.log(`click`));

// const links = document.querySelectorAll(`button[data-link]`);
// console.log(links);

// links.forEach(link => {
//     console.log(link.dataset);
//     link.addEventListener(`click`, () => document.location.href = link.dataset.href);
// })

// form

// const TShirtColor = [...document.querySelectorAll(`input[name="TShirtColor"]`)];
// const TShirtSize = [...document.querySelectorAll(`input[name="TShirtSize"]`)];
const TShirtVariant = document.querySelector(`#TShirtVariant`);
const TShirtMessage = document.querySelector(`#TShirtMessage`);
const TShirtPromoCode = document.querySelector(`#TShirtPromoCode`);

const TShirtForm = document.querySelector(`#TShirtForm`);

TShirtForm.addEventListener(`submit`, event => {
    event.preventDefault();

    let promocode = TShirtPromoCode.value; // '' => false

    // if(!promocode){
    //     TShirtPromoCode.classList.add(`error`);
    //     return;
    // }

    let colors = [...document.querySelectorAll(`input[name="TShirtColor"]:checked`)].map(item => item.value);
    let size = document.querySelector(`input[name="TShirtSize"]:checked`).value;
    let variant = TShirtVariant.value;
    let textarea = TShirtMessage.value;
    
    let TShirt = {
        promocode: promocode,
        colors: colors,
        size: size,
        variant: variant,
        textarea: textarea
    }

    console.log(TShirt);
    console.log(JSON.stringify(TShirt));
});

const TShirtRememder = document.querySelector(`#TShirtRememder`);
TShirtRememder.addEventListener(`click`, () => {
    console.log(`TShirtRememder`);
})

// localStorage/sessionStorage

// event on rendered elements

// Calendar practice