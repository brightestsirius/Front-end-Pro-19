const userStatus = document.querySelector(`#userStatus`);

const msgForm = document.querySelector(`#msgForm`);
const msgInput = document.querySelector(`#msgInput`);

const msgList = document.querySelector(`#msgList`);

const connectionClose = document.querySelector(`#connectionClose`);
const connectionReopen = document.querySelector(`#connectionReopen`);

const renderMsg = msg =>{
    const li = document.createElement(`li`);
    li.innerHTML = msg;
    msgList.append(li);
}

const createWS = () => {
    const ws = new WebSocket(`ws://localhost:3001`);

    ws.addEventListener(`open`, () => {
        console.log(`Connection establised on Client-side!`);
        userStatus.innerHTML = `🟢 Online`;
    })

    ws.addEventListener(`close`, () => {
        console.log(`Connection closed on Client-side!`);
        userStatus.innerHTML = `🔴 Offline`;
    })
    
    ws.addEventListener(`message`, msg => {
        msg = msg.data;
        console.log(`Message from Server: ${msg}`);
        renderMsg(msg);
    })
    
    connectionClose.addEventListener(`click`, () =>{
        ws.close();
    })

    msgForm.addEventListener(`submit`, e=>{
        e.preventDefault();
    
        let msg = msgInput.value;

        console.log(ws.readyState);
    
        if(ws.readyState === 1){
            ws.send(msg);
            msgForm.reset();
        }
    })
}

connectionReopen.addEventListener(`click`, createWS);

createWS();