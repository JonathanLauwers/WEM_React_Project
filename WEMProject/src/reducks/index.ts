import room from "./room";
import asset from "./asset";
import { combineReducers } from 'redux';

export default combineReducers({room: room, asset: asset});