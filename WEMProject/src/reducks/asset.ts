import { Reducer } from "react";
import { ASSETS } from '../../assets/assets.js';

const assets = ASSETS;

const reducer: Reducer<any, any> = (
  state = { list: assets }, action
) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducer;