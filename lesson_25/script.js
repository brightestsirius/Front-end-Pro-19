// const select = document.querySelector(`select`);
// select.addEventListener(`change`, e => {
//     let selectedOption = e.target.value; // select.value;

//     let option = select.querySelector(`option[value="${selectedOption}"]`);
//     // option.disabled = true;
    
//     option.setAttribute(`disabled`, `false`);
// });

// async/await

// const getFile = url => fetch(url)
//     .then(data => data.ok ? data.json() : Promise.catch(data.statusText))

// getFile(`https://jsonplaceholder.typicode.com/users`)
//     .then(data => console.log(data))
//     .catch(err => console.error(err));

// console.log(`before`);

// // function myFunc(){
// //     return new Promise(resolve => resolve(`hello`));
// // }

// const getFile = async url => {
//     let request = await fetch(url);
//     let response = request.ok ? request.json() : Promise.catch(request.statusText);
    
//     return response;
// }

// // getFile(`https://jsonplaceholder.typicode.com/users`)
// //     .then(data => console.log(data))
// //     .catch(err => console.log(err));

// (async () => {
//     try{
//         // Promise
//         //     .all([
//         //         getFile(`https://jsonplaceholder.typicode.com/users/1`),
//         //         getFile(`https://jsonplaceholder.typicode.com/users/2`),
//         //         getFile(`https://jsonplaceholder.typicode.com/users/3`),
//         //     ])
//         //     .then(data => console.log(data))
//         //     .then(async () => {
//         //         let users = await getFile(`https://jsonplaceholder.typicode.com/users`);
//         //         console.log(users);

//         //         console.log(`hello world`);
//         //     })

//         let threeUsers = await Promise
//             .all([
//                 getFile(`https://jsonplaceholder.typicode.com/users/1`),
//                 getFile(`https://jsonplaceholder.typicode.com/users/2`),
//                 getFile(`https://jsonplaceholder.typicode.com/users/3`),
//             ]);
        
//         console.log(threeUsers);
        
//         let users = await getFile(`https://jsonplaceholder.typicode.com/users`);
//         console.log(users);

//         console.log(`hello world`);
//     } catch(err){
//         console.log(`In catch: ${err}`);
//     }
// })();

// console.log(`after`);

// try/catch/finally

// METHOD
// 	GET – получение данных
// 	POST * – отправка данных на сервер в теле запроса (body)
// 	PUT * – отправка данных на сервер в теле запроса (обновление ресурса)
// 	PATCH * – отправка данных на сервер в теле запроса
// 	DELETE

// HEADERS – служебная информация (кодировка, сжатие, сервер, кеширование)

// STATUS
// 	100
// 		101

// 	200
// 		201
// 		204

// 	300
// 		301
// 		302

// 	400 – ошибка на фронте
// 		401
// 		403
// 		404

// 	500 – ошибка на сервере
// 		502
// 		503

// https://jsonplaceholder.typicode.com/

// REST – архитектура клиент-серверного взаимодействия
// свод правил (рекомендаций), по которым клиент (web app, mobile app) и сервер должны между собой взаимодействовать

// REST говорит, что нужно думать о данных, которые хранятся на сервере как о ресурсе.
// У каждого ресурса на сервере есть свой URL. 

// LIST – GET /posts // – запрос на ресурс posts
// ITEM – GET /posts/:id // – запрос на ресурс posts с :id

// ADD – POST /posts     body:{name: Alex, age: 21} // – запрос на ресурс posts c телом запроса, id всегда назначает только сервер
// <== {id: 101, name: Alex, age: 21}

// FULL UPDATE – PUT /posts/:id  body:{name: Ivan} // в body отправляются все поля объекта
// <== {id: 101, name: Ivan}

// PARTIAL UPDATE – PATCH /posts/:id body:{name: ''} // в body отправляется только то, что изменилось
// <== {id: 101, name: '', age: 21}

// DELETE – /posts/:id
// <== {}

// REST

// RESTfull Api – сферический конь в вакууме 😌

// https://mockapi.io/

// fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(data => data.json())
//     .then(data => console.log(data))
//     .then(() => 
//         fetch(
//             `https://jsonplaceholder.typicode.com/users`, 
//             {
//                 method: `POST`,
//                 body: JSON.stringify({name: `Dmytro`, age: 25}),
//                 headers: {
//                     "content-type": "application/json; charset=utf-8"
//                 }
//             }
//         )
//     )
//     .then(data => data.json())
//     .then(data => console.log(data))
//     .then(() => fetch(`https://jsonplaceholder.typicode.com/users`))
//     .then(data => data.json())
//     .then(data => console.log(data))

// fetch(`https://jsonplaceholder.typicode.com/users/1`)
//     .then(data => data.json())
//     .then(user => {
//         console.log(user);
//         return user;
//     })
//     .then(user => {
//         // user.username = `Katya`;
//         return fetch(
//             `https://jsonplaceholder.typicode.com/users/1`, 
//             {
//                 method: `PUT`,
//                 body: JSON.stringify(Object.assign(user, {username: `Katya`})),
//                 headers: {
//                     "content-type": "application/json; charset=utf-8"
//                 }
//             }
//         )
//     })
//     .then(data => data.json())
//     .then(data => console.log(data))

// fetch(`https://jsonplaceholder.typicode.com/users/1`)
//     .then(data => data.json())
//     .then(user => console.log(user))
//     .then(() => {
//         return fetch(
//             `https://jsonplaceholder.typicode.com/users/1`, 
//             {
//                 method: `PATCH`,
//                 body: JSON.stringify({username: `Katya`}),
//                 headers: {
//                     "content-type": "application/json; charset=utf-8"
//                 }
//             }
//         )
//     })
//     .then(data => data.json())
//     .then(data => console.log(data))

// fetch(`https://jsonplaceholder.typicode.com/users/1`)
//     .then(data => data.json())
//     .then(user => console.log(user))
//     .then(() => {
//         return fetch(
//             `https://jsonplaceholder.typicode.com/users/1`, 
//             {
//                 method: `DELETE`
//             }
//         )
//     })
//     .then(data => data.json())
//     .then(data => console.log(data))


// const getFile = url => fetch(url)
//     .then(data => data.ok ? data.json() : Promise.catch(dara.statusText));

const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "content-type": "application/json; charset=utf-8"
        }
    }

    if(obj) options.body = JSON.stringify(obj);
    
    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
}

// controller(`https://jsonplaceholder.typicode.com/users`, `POST`, {username: `Anna`})
//     .then(data => {
//         console.log(`Add new user, method POST`, data);
//     })
//     .then(() => controller(`https://jsonplaceholder.typicode.com/users/1`))
//     .then(data => {
//         console.log(`Get user with id:1, method GET`, data);
//     })
//     .then(() => controller(`https://jsonplaceholder.typicode.com/users/1`, `PUT`, {username: `Katya`}))
//     .then(data => {
//         console.log(`Change user with id:1, method PUT`, data);
//     })
//     .then(() => controller(`https://jsonplaceholder.typicode.com/users/1`, `PATCH`, {username: `Katya`}))
//     .then(data => {
//         console.log(`Change user with id:1, method PATCH`, data);
//     })
//     .then(() => controller(`https://jsonplaceholder.typicode.com/users/1`, `DELETE`))
//     .then(data => {
//         console.log(`Delete user with id:1, method DELETE`, data);
//     })
//     .catch(err => console.log(`In catch: ${err}`));

// or async/await

(async () => {
    try{
        let newUser = await controller(`https://jsonplaceholder.typicode.com/users`, `POST`, {username: `Anna`});
        console.log(`Add new user, method POST`, newUser);

        let userFirst = await controller(`https://jsonplaceholder.typicode.com/users/1`);
        console.log(`Get user with id:1, method GET`, userFirst);

        let userFirstPUT = await controller(`https://jsonplaceholder.typicode.com/users/1`, `PUT`, {username: `Katya`});
        console.log(`Change user with id:1, method PUT`, userFirstPUT);

        let userFirstPATCH = await controller(`https://jsonplaceholder.typicode.com/users/1`, `PATCH`, {username: `Katya`});
        console.log(`Change user with id:1, method PATCH`, userFirstPATCH);

        let userDeleted = await controller(`https://jsonplaceholder.typicode.com/users/1`, `DELETE`);
        console.log(`Delete user with id:1, method DELETE`, userDeleted);

    } catch(err){
        console.log(`In catch: ${err}`);
    }
})();