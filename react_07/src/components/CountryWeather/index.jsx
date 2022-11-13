import React, { useState, Fragment } from "react";

import SelectRegion from "./SelectRegion";
import SelectCountry from "./SelectCountry";
import Weather from "./Weather";

import "./style.sass";

export default function CountryWeather() {
  const [region, setRegion] = useState();
  const [capital, setCapital] = useState();

  return (
    <div className="container">
      <SelectRegion liftRegion={(value) => setRegion(value)} />

      {region ? (
        <Fragment>
          <hr></hr>
          <SelectCountry
            region={region}
            liftCapital={(value) => setCapital(value)}
          />
        </Fragment>
      ) : null}

      {capital ? (
        <Fragment>
          <hr />
          <Weather capital={capital} />
        </Fragment>
      ) : null}
    </div>
  );
}
