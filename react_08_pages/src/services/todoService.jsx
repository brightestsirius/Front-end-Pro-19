const API = `https://jsonplaceholder.typicode.com/todos`;

export const getList = () => fetch(API).then(data => data.json());

export const getListItem = id => fetch(API+`/${id}`).then(data => data.json());