import React, {useEffect, useState} from "react";
import {getCountriesByRegion} from './../../services/countryServices';

export default function SelectCountry({region, liftCapital}) {
  const [countries, setCountries] = useState([]);
;
  useEffect(()=>{
    (async () => {
      let selectedRegion = await getCountriesByRegion(region);
      //console.log(selectedRegion);
      setCountries(selectedRegion.map(item => ({
        name: item.name.common,
        flag: item.flag,
        capital: item.capital ? item.capital[0] : ``
      })));
    })();
  }, [region]);

  return (
    <label>
      Choose country:{" "}
      <select onChange={e => liftCapital(e.target.value)}>
        {countries.map((item,index) => <option key={index} value={item.capital}>{item.flag} {item.name}</option>)}
      </select>
    </label>
  );
}
