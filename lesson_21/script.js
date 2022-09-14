// event on rendered elements

// const formCreation = document.querySelector(`#formCreation`);
// const formName = formCreation.querySelector(`#formName`);
// const formBg = formCreation.querySelector(`#formBg`);

// const wrapperBtns = document.querySelector(`#wrapperBtns`);

// formCreation.addEventListener(`submit`, e => {
//     e.preventDefault();

//     let buttonIndex = wrapperBtns.children.length;
//     console.log(buttonIndex);

//     let btn = `<button id="btn_${buttonIndex}" style="background-color: ${formBg.value}">${formName.value}</button>`;
//     wrapperBtns.innerHTML += btn;

//     let newBtn = wrapperBtns.querySelector(`#btn_${buttonIndex}`);
//     console.log(newBtn);

//     newBtn.addEventListener(`click`, () => {
//         console.log(`click`);
//         newBtn.remove();
//     })
// })

// formCreation.addEventListener(`submit`, e => {
//     e.preventDefault();

//     let btn = document.createElement(`button`);
//     btn.innerHTML = formName.value;
//     btn.style.background = formBg.value;

//     btn.addEventListener(`click`, () => {
//         btn.remove();
//     })

//     wrapperBtns.append(btn);
// })

// localStorage/sessionStorage

// let animals = [`cat`,`dog`];

// let storageAnimalsExist = localStorage.getItem(`animals`); // null
// if(!storageAnimalsExist){
//     localStorage.setItem(`animals`, JSON.stringify(animals));
// }

// const createAnimal = document.querySelector(`#createAnimal`);

// createAnimal.addEventListener(`change`, e => {
//     let storageAnimals = JSON.parse(localStorage.getItem(`animals`));

//     storageAnimals.push(e.target.value);
    
//     localStorage.setItem(`animals`, JSON.stringify(storageAnimals));
// })

// localStorage.setItem(`cat`, JSON.stringify(`Tom`));
// console.log( JSON.parse(localStorage.getItem(`cat`)) );

// localStorage.setItem(`age`, JSON.stringify(30));
// console.log( JSON.parse(localStorage.getItem(`age`)) );

// HXR

// const nextAnimalsFunc = animals => {
//     console.log(animals);
// }

// const callbackAnimals = animals => {
//     console.log(`Getted animals`, animals);

//     nextAnimalsFunc(animals.map(item => item+`!`));
// }

// const callbackCat = cat => {
//     console.log(`Getted cat`, cat);
// }

// const getFile = (file, cb) => {
//     console.log(`Start getting ${file}`);

//     let xhr = new XMLHttpRequest(); // readyState: 0
//     // console.log(xhr);
//     xhr.open(`GET`, file); // readyState: 1
//     xhr.send(); // // readyState: 2

//     xhr.addEventListener(`readystatechange`, ()=>{
//         console.log(xhr.readyState);
        
//         if(xhr.readyState === 4){
//             // console.log(xhr.response);
//             let response = xhr.status>=200 && xhr.status<400  ? JSON.parse(xhr.response) : [];
//             cb(response);
//         }
//     })
// }

// getFile(`./files/animals.json`, callbackAnimals);
// getFile(`./files/cat.json`, callbackCat);

// console.log(`after func getFile`);

// let cat = getFile(`./files/cat.json`);

// console.log(animals);
// console.log(cat);

// let xhrAnimals = new XMLHttpRequest();
// console.log(xhrAnimals);

// xhrAnimals.open(`GET`, `./files/animals.json`, false);
// xhrAnimals.send();

// let animals = xhrAnimals.status>=200 && xhrAnimals.status<400  ? JSON.parse(xhrAnimals.response) : [];
// console.log(animals);

// console.log(`after xhrAnimals`);

// let xhrCat = new XMLHttpRequest();
// xhrCat.open(`GET`, `./files/cat.json`, false);
// xhrCat.send();

// let cat = xhrCat.status>=200 && xhrCat.status<400  ? JSON.parse(xhrCat.response) : {};
// console.log(cat);

// console.log(`after xhrCat`);


// localServer
// SublimeServer – https://packagecontrol.io/packages/SublimeServer
//     Установка:
//         В верхнем меню Tools -> Command Palette
//         В Command Palette ищем Package Control: Install Package
//         В Install Package ищем SublimeServer
//         Возможно, после установки SublimeServer нужно будет перезагрузить среду разработки.
//         Когда нужно поднять локальный сервер – в верхнем меню Tools -> SublimeServer -> Start SublimeServer. И далее, правой кнопкой мыши в файле index.html и в появившемся меню выбираем View in SublimeServer

// VS Code Live Server – https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

let animalsGlobal;

const getAnimal = animal => console.log(animal);

const getLion = lion => console.log(lion);

const getDog = dog => {
    console.log(dog);
    getFile(`./files/${animalsGlobal[2]}.json`, getLion);
}

const getCat = cat => {
    console.log(cat);
    getFile(`./files/${animalsGlobal[1]}.json`, getDog)
};

const getAnimals = animals => {
    // ["cat", "dog", "lion"]
    animalsGlobal = animals;
    getFile(`./files/${animals[0]}.json`, getCat);

    // animals.forEach(animal => {
    //     getFile(`./files/${animal}.json`, getAnimal);
    // })
}

const getFile = (file, cb) => {
    console.log(`Start getting ${file}`);

    let xhr = new XMLHttpRequest();
    xhr.open(`GET`, file);
    xhr.send();
    
    xhr.addEventListener(`readystatechange`, () => {
        if(xhr.readyState === 4){
            console.log(`End getting ${file}`);

            if(xhr.status>=200 && xhr.status<400){
                cb(JSON.parse(xhr.response));
            }
        }
    })
}

getFile(`./files/animals.json`, getAnimals);

// animals - 1s

// cat - 2s
// dog - 3s
// lion - 1.5s

// 1s + 3s = 4s
// 1s + 2s + 3s + 1.5s = 7.5s

// Promise