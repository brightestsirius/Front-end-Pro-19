class User{
    constructor(){}

    render(){
        return `<div class="user"></div>`
    }
}

let usersDiv = users
    .map(user => new User(user))
    .map(user => user.render())
    .join(``);

document.write(`<div class="users">${usersDiv}</div>`)