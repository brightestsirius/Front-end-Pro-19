import axios from 'axios';

const API = `https://jsonplaceholder.typicode.com/todos`;
const controller = new AbortController();

export const getList = () => axios.get(API, {signal: controller.signal}).then(({data}) => data);

export const addItem = obj => axios.post(API, JSON.stringify(obj), {
    headers: {
        "content-type": "application/json"
    }
}).then(({data}) => data);

export const abortFetch = () => {
    console.log(`in abortFetch`);
    controller.abort();
};

// fetch => Response => Response.json();
// axios => Response.data => {data} => data