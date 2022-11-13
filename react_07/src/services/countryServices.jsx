export const regions = [`Africa`, `Americas`, `Asia`, `Europe`, `Oceania`];

const API = `https://restcountries.com/v3.1/region`;

export const getCountriesByRegion = region => fetch(API+`/${region}`).then(data => data.json());