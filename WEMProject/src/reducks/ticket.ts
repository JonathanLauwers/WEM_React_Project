import { Reducer } from "react";
import { TICKETS } from '../../assets/tickets.js';

const tickets = TICKETS;

const reducer: Reducer<any, any> = (
  state = { list: tickets }, action
) => {
  switch (action.type) {
    default: return state;
  }
};

export default reducer;