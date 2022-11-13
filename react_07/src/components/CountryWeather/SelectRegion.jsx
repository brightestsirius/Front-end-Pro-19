import React from "react";
import {regions} from './../../services/countryServices';

export default function SelectRegion({liftRegion}) {
  return (
    <label>
      Choose region:{" "}
      <select onChange={e => liftRegion(e.target.value)}>
        {regions.map((item,index) => <option key={index} value={item}>{item}</option>)}
      </select>
    </label>
  );
}
