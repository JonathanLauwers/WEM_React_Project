import room from "./room";
import asset from "./asset";
import ticket from "./ticket";
import { combineReducers } from 'redux';

export default combineReducers({room: room, asset: asset});