import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {setThemeColorAction} from './../../store/theme/actions'

export default function Switcher() {
  const {themeColor} = useSelector((state) => state.theme);

  const dispatch = useDispatch(); // store.dipatch();

  return (
    <label>
      Set theme color <input type="color" defaultValue={themeColor} onChange={e => dispatch(setThemeColorAction(e.target.value))} />
    </label>
  );
}
