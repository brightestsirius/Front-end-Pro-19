const ws = require(`ws`);
const server = new ws.Server({port: 3001});

server.on(`connection`, socket => {
    console.log(`Connection establised on Server-side!`);

    socket.on(`message`, msg => {
        msg = msg.toString();
        console.log(`Message from client: ${msg}`);

        if(msg === `Exit`){
            socket.close();
        } else{
            server.clients.forEach(client => {
                client.send(msg);
            })
        }
    })

    socket.on(`close`, () => {
        console.log(`Connection closed on Server-side!`);
    })
})