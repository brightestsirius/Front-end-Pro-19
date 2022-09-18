// args in Promise.resolve/reject

// const myPromise = value => new Promise(
//     (resolve, reject) => {
//         value ? resolve({x: 100, y: 200}) : reject({x: 300, y: 400});
//     }
// )

// myPromise(false)
//     .then(data => console.log(`In resolve`, data))
//     .catch(data => console.log(`In catch`, data));

// all, allSettled, race

const timeout = time => new Promise((resolve, reject) => {
    console.log(`Start ${time} ms`);
    
    setTimeout(() => {
        console.log(`End ${time} ms`);
        time === 1000 ? reject() : resolve(`End ${time} ms`);
    }, time);
})

// timeout(1000)
//     .then(data => console.log(data));

// timeout(1500)
//     .then(data => console.log(data));

// timeout(500)
//     .then(data => console.log(data));

// console.log(`after all timeouts`);

// Promise
//     .all([
//         timeout(1200),
//         timeout(1500),
//         timeout(500)
//     ])
//     .then(data => console.log(`in resolve`, data)) // [`End 1000 ms`, `End 1500 ms`, `End 500 ms`;
//     .catch(() => console.log(`In catch`));

// Promise
//     .allSettled([
//         timeout(1000),
//         timeout(1500),
//         timeout(500)
//     ])
//     .then(data => data.filter(item => item.status === `fulfilled`).map(item => item.value))
//     .then(data => console.log(data));

    // .then(data => {
    //     console.log(data);
    //     return data.filter(item => item.status === `fulfilled`)
    // })
    // .then(data => {
    //     console.log(data);
    //     return data.map(item => item.value);
    // })
    // .then(data => console.log(data));

// Promise
//     .race([
//         timeout(1200),
//         timeout(1500),
//         timeout(500)
//     ])
//     .then(data => console.log(`In then`, data));

// class Math{
//     static getSum(){}

//     then(){}
// }

// let myMath = new Math();

// myMath.then();
// Math.getSum();

// const getFile = file => new Promise(
//     (resolve, reject) => {
//         console.log(`Start getting ${file}.`);

//         let xhr = new XMLHttpRequest();
//         xhr.open(`GET`, file);
//         xhr.send();

//         xhr.addEventListener(`readystatechange`, () => {
//             if(xhr.readyState === 4){
//                 console.log(`End getting ${file}.`);
//                 xhr.status<400 ? resolve(JSON.parse(xhr.response)) : reject(xhr.statusText);
//             }
//         })
//     }
// )

// getFile(`./files/animals.json`)
//     .then(animals => {
//         console.log(animals);

//         // animals.map(item => getFile(`./files/${item}.json`))
//         // [
//         //     getFile(`./files/cat.json`),
//         //     getFile(`./files/dog.json`),
//         //     getFile(`./files/lion.json`)
//         // ]

//         return Promise.allSettled(animals.map(item => getFile(`./files/${item}.json`)))
//     })
//     .then(data => {
//         console.log(data);
//         return data.filter(item => item.status === `fulfilled`).map(item => item.value);
//     })
//     .then(data => data.forEach(item => console.log(item.name)))
//     .catch(err => console.log(err));


// fetch(`./files/animals.json`)
//     .then(data => {
//         console.log(data);
//         return data.json();
//     })
//     .then(data => console.log(data));


// fetch(`./files/animals.json`)
//     .then(data => data.json())
//     .then(data => console.log(data));

// const getFile = file => fetch(file)
//     .then(data => data.ok ? data.json() : Promise.reject(data.statusText));

// getFile(`./files/animals.json`)
//     .then(animals => {
//         console.log(animals);

//         return Promise.allSettled(animals.map(animal => getFile(`./files/${animal}.json`)))
//     })
//     .then(data => {
//         console.log(data);
//         return data.filter(item => item.status === `fulfilled`).map(item => item.value);
//     })
//     .then(data => data.forEach(item => console.log(item.name)))
//     .catch(err => console.log(`In catch: ${err}.`));

// fetch

const getFile = file => fetch(file)
    .then(data => data.ok ? data.json() : Promise.reject(data.statusText));

getFile(`https://api.chucknorris.io/jokes/random`)
    .then(data => console.log(data))
    .catch(err => console.log(`In catch: ${err}.`));

getFile(`https://api.chucknorris.io/jokes/categories`)
    .then(data => console.log(data))
    .catch(err => console.log(`In catch: ${err}.`));

getFile(`https://api.chucknorris.io/jokes/random?category=fashion`)
    .then(data => console.log(data))
    .catch(err => console.log(`In catch: ${err}.`));


// Jokes

// async/await