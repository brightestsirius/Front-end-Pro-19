import React, {useEffect, useState} from "react";
import {getWeatherByCity} from './../../services/weatherService';

export default function Weather({capital}) {
  const [weather, setWeather] = useState({})

  useEffect(()=>{
    (async () => {
      let cityWeather = await getWeatherByCity(capital);
      setWeather(cityWeather.main);
    })();
  }, [capital]);

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <ul>
        {Object.keys(weather).map((key, index) => <li key={index}>{key}: {weather[key]}</li>)}
      </ul>
    </div>
  );
}
