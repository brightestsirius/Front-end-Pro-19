const ws = require(`ws`);
const server = new ws.Server({port: 3000});

const MSG_STATUS = {
    0: () => `Hello, I'm Server!`,
    1: name => `Hello, ${name}!`
}

server.on(`connection`, socket => {
    console.log(`Connection establised on Server-side!`);

    setTimeout(() => socket.send(`Hello, I'm Server!`), 1500);

    socket.on(`message`, msg => {
        msg = JSON.parse(msg.toString());

        if(MSG_STATUS[msg.status]){
            socket.send(MSG_STATUS[msg.status](msg.value))
        }
    })
})