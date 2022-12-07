const API = `https://jsonplaceholder.typicode.com/todos`;

export const getList = () => fetch(API).then((data) => data.json());

export const changeItem = (id, obj) =>
  fetch(API + `/${id}`, {
    method: `PATCH`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());

export const removeItem = (id) =>
  fetch(API + `/${id}`, { method: `DELETE` }).then((data) => data.json());

export const addItem = (obj) =>
  fetch(API, {
    method: `POST`,
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((data) => data.json());