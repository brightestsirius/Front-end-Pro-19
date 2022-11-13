const API_KEY = `7f273afaa82b154a47602f5b3a43314a`;
const API = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;

export const getWeatherByCity = city => fetch(API+`&q=${city}`).then(data=>data.json());