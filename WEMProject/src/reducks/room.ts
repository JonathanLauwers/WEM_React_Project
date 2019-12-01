import { Reducer } from "react";
import { ROOMS } from '../../assets/rooms.js';

const rooms = ROOMS;

const reducer: Reducer<any, any> = (
  state = { list: rooms }, action
) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducer;