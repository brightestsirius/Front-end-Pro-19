// 🥳🥵

const controller = async (url, method=`GET`, obj) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.catch(request.statusText);

    return response;
};

const API = `https://63347892301bbc0a62124946.mockapi.io`;

const getUsers = async () => {
    let users = await controller(API+`/users`);
    console.log(users);
}

getUsers();

const addUser = document.querySelector(`#addUser`);
addUser.addEventListener(`click`, async () => {
    let userAdded = await controller(API+`/users`, `POST`, {name: `Anna`, country: `Ukraine`});
    console.log(userAdded);
});

const changeUser = document.querySelector(`#changeUser`);
changeUser.addEventListener(`click`, async () => {
    let changedUser = await controller(API+`/users/14`, `PUT`, {country: `Poland`});
    console.log(changedUser);
});

const deleteUser = document.querySelector(`#deleteUser`);
deleteUser.addEventListener(`click`, async () => {
    let deletedUser = await controller(API+`/users/13`, `DELETE`);
    console.log(deletedUser); // {}
})