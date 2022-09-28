const API = `https://63345555433198e79dd5da3b.mockapi.io/`;

const controller = async (url, method=`GET`, obj={}) => {
    let options = {
        method: method,
        headers: {
            "Content-type": "application/json"
        }
    }

    if(obj) options.body = JSON.stringify(obj);

    let request = await fetch(url, options),
        response = request.ok ? request.json() : Promise.reject();

    return response;
}