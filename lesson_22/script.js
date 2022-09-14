// 🔴🟢🥳🤗

// const getFile = (file, cb) => {
//     console.log(`Start getting ${file}`);

//     let xhr = new XMLHttpRequest();
//     xhr.open(`GET`, file);
//     xhr.send();

//     xhr.addEventListener(`readystatechange`, () => {
//         if(xhr.readyState === 4){
//             console.log(`End getting ${file}`);

//             xhr.status<400 && cb(JSON.parse(xhr.response));
//         }
//     })
// };

// const getAnimals = animals => animals.forEach(animal => getFile(`./files/${animal}.json`, renderAnimal));
// const renderAnimal = animal => console.log(animal);

// getFile(`./files/animals.json`, getAnimals);

// const hasMoney = true;

// const startFunc = () => hasMoney ? firstGreen() : firstRed();

// const startGreen = () => {
//     firstGreen();
//     secondGreen();
//     thirdGreen();
// }

// const firstGreen = () => {
//     setTimeout(() => console.log(`🟢 1 function`), 1000);
// }

// const secondGreen = () => console.log(`🟢 2 function`);
// const thirdGreen = () => console.log(`🟢 3 function`);

// const firstGreen = () => {
//     setTimeout(() => {
//         console.log(`🟢 1 function`);
//         secondGreen();
//     }, 1500);
// }

// const secondGreen = () => {
//     setTimeout(() => {
//         console.log(`🟢 2 function`);
//         thirdGreen();
//     }, 1000);
// }

// const thirdGreen = () => {
//     setTimeout(() => {
//         console.log(`🟢 3 function`);
//     }, 500);
// }

// const firstRed = () => {
//     console.log(`🔴 1 function`);
//     secondRed();
// }

// const secondRed = () => {
//     console.log(`🔴 2 function`);
//     thirdRed();
// }

// const thirdRed = () => {
//     console.log(`🔴 3 function`);
// }

// startFunc();

// Promise

// const hasMoney = true;

// const okFunc = () => console.log(`🟢 In ok function`);
// const notOkFunc = () => console.log(`🔴 In not ok function`);

// let myPromise = new Promise(
//     function(resolve){
//         setTimeout(() => resolve(1500), 1500);
//     }
// );

// myPromise
//     .then(
//         function(time){
//             console.log(`🟢 In 1 ok function – after ${time}ms`);
            
//             return new Promise(
//                 function(resolve){
//                     setTimeout(() => resolve(1000), 1000);
//                 }
//             );
//         }
//     )
//     .then(
//         function(time){
//             console.log(`🟢 In 2 ok function – after ${time}ms`);
//             return new Promise(
//                 function(resolve){
//                     setTimeout(() => resolve(1800), 1800);
//                 }
//             );
//         }
//     )
//     .then(
//         function(time){
//             console.log(`🟢 In 3 ok function – after ${time}ms`);
//         }
//     )

// myPromise
//     .then(
//         function(){
//             console.log(`🟢 In 1 ok function`);
//         }
//     )
//     .finally(
//         function(){
//             console.log(`🥳 In 1 finally`);
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 2 ok function`);
//         }
//     )
//     .finally(
//         function(){
//             console.log(`🥳 In 2 finally`);
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 3 ok function`);
//         }
//     )
//     .finally(
//         function(){
//             console.log(`🥳 In 3 finally`);
//         }
//     )
//     .catch(
//         function(){
//             console.log(`🤗 In catch`);
//         }
//     )

// myPromise
//     .then(
//         function(){
//             console.log(`🟢 Ready state: 4`);

//             let fileGetted = false;
//             return fileGetted ? Promise.resolve() : Promise.catch();
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 2 ok function`);
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 3 ok function`);
//             let lionGetted = false;
//             return lionGetted ? Promise.resolve() : Promise.catch();
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 4 ok function`);
//         }
//     )
//     .catch(
//         function(){
//             console.log(`🤗 In 1 catch.`)
//         }
//     )


// myPromise
//     .then(
//         function(){
//             console.log(`🟢 In ok function`);
//             return Promise.reject();
//         },
//         function(){
//             console.log(`🔴 In not ok function`);
//             return Promise.reject();
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 2 ok function`);
//         },
//         function(){
//             console.log(`🔴 In 2 not ok function`);
//         }
//     )
//     .then(
//         function(){
//             console.log(`🟢 In 3 ok function`);
//         },
//         function(){
//             console.log(`🔴 In 3 not ok function`)
//         }
//     )

const getFile = file => {
    return new Promise(
        function(resolve, reject){
            let xhr = new XMLHttpRequest();
            xhr.open(`GET`, file);
            xhr.send();

            xhr.addEventListener(`readystatechange`, () =>{
                if(xhr.readyState === 4){
                    xhr.status<400 ? resolve(JSON.parse(xhr.response)) : reject(xhr.status);
                }
            })
        }
    )
}

console.log(`start chain`);

let getCat = getFile(`./files/cat.json`);

getCat
    .then(
        function(data){
            console.log(`🟢 In 1 ok function`);
            console.log(data);
        }
    )
    .then(
        function(){
            return getFile(`./files/dog.json`);
        }
    )
    .then(
        function(data){
            console.log(`🟢 In 2 ok function`);
            console.log(data);
        }
    )
    .then(
        function(){
            return getFile(`./files/lion.json`);
        }
    )
    .then(
        function(data){
            console.log(`🟢 In 3 ok function`);
            console.log(data);
        }
    )
    .catch(
        function(err){
            console.log(`🔴 In catch: ${err}`)
        }
    )

console.log(`end chain`);

// fetch
// async/await