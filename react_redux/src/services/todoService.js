const API = `https://jsonplaceholder.typicode.com/todos`;

export const getTodo = () => fetch(API).then(data => data.json());