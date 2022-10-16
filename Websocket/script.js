const ws = new WebSocket(`ws://localhost:3000`);

ws.addEventListener(`open`, () => console.log(`Connection establised on Client-side!`));

ws.addEventListener(`message`, msg => console.log(msg.data));

const sendMsg = document.querySelector(`#sendMsg`);
sendMsg.addEventListener(`click`, () => {
    ws.send(JSON.stringify({status: 0}));
})

const username = document.querySelector(`#username`);
username.addEventListener(`change`, e => {
    ws.send(JSON.stringify({status: 1, value: e.target.value}));
})