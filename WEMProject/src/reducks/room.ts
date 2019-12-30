import { Reducer } from "react";
import { Room } from "../data";

const LOAD_ROOM_LIST = 'WEMProject/room/LOAD_ROOM_LIST';
const LOAD_ROOM_LIST_SUCCESS = 'WEMProject/room/LOAD_ROOM_LIST_SUCCESS';
const LOAD_ROOM_LIST_FAIL = 'WEMProject/room/LOAD_ROOM_LIST_FAIL';

const VOTE_ROOM = 'WEMProject/room/VOTE_ROOM';
const VOTE_ROOM_SUCCESS = 'WEMProject/room/VOTE_ROOM_SUCCESS';
const VOTE_ROOM_FAIL = 'WEMProject/room/VOTE_ROOM_FAIL';

const FILTER_ROOM_LIST = 'WEMProject/room/FILTER_ROOM_LIST';
const FILTER_ROOM_LIST_SUCCESS = 'WEMProject/room/FILTER_ROOM_LIST_SUCCESS';
const FILTER_ROOM_LIST_FAIL = 'WEMProject/room/FILTER_ROOM_LIST_FAIL';

type GetListAction = {
  type: typeof LOAD_ROOM_LIST,
  payload: any
};

type GetListActionSuccess = {
  type: typeof LOAD_ROOM_LIST_SUCCESS,
  payload: { data: Room[] }
}

type GetListActionFail = {
  type: typeof LOAD_ROOM_LIST_FAIL,
  payload: []
}

type VoteRoomAction = {
  type: typeof VOTE_ROOM,
  payload: any
};

type VoteRoomActionSuccess = {
  type: typeof VOTE_ROOM_SUCCESS,
  payload: []
}

type VoteRoomActionFail = {
  type: typeof VOTE_ROOM_FAIL,
  payload: []
}

type FilterListAction = {
  type: typeof FILTER_ROOM_LIST,
  payload: any
};

type FilterActionSuccess = {
  type: typeof FILTER_ROOM_LIST_SUCCESS,
  payload: { data: Room[] }
}

type FilterActionFail = {
  type: typeof FILTER_ROOM_LIST_FAIL,
  payload: []
}

type ActionTypes = GetListAction | 
  GetListActionSuccess | 
  GetListActionFail | 
  VoteRoomAction | 
  VoteRoomActionSuccess | 
  VoteRoomActionFail |
  FilterListAction |
  FilterActionSuccess |
  FilterActionFail;

// State Type
type RoomState = {
  list: Room[],
  isLoadingList: boolean,
  isVoting: boolean,
  isFilteringList: boolean,
}

// Reducer
const reducer: Reducer<RoomState, ActionTypes> = (
  state = { list: [], isLoadingList: false, isVoting: false }, action
) => {
  switch (action.type) {
    case LOAD_ROOM_LIST: {
      return { ...state, isLoadingList: true };
    }
    case LOAD_ROOM_LIST_SUCCESS: {
      return { ...state, list: action.payload.data, isLoadingList: false }
    }
    case LOAD_ROOM_LIST_FAIL: {
      return { ...state, isLoadingList: false }
    }
    case VOTE_ROOM: {
      return { ...state, isVoting: true };
    }
    case VOTE_ROOM_SUCCESS: {
      return { ...state, isVoting: false }
    }
    case VOTE_ROOM_FAIL: {
      return { ...state, isVoting: false }
    }
    case FILTER_ROOM_LIST: {
      return { ...state, isFilteringList: true };
    }
    case FILTER_ROOM_LIST_SUCCESS: {
      return { ...state, list: action.payload.data, isFilteringList: false }
    }
    case FILTER_ROOM_LIST_FAIL: {
      return { ...state, isFilteringList: false }
    }
    default: return state;
  }
};

// Action Creators
export const getRoomList = () => {
  return async (dispatch) => {
    dispatch(setRoomListLoading());
    try {
      const response = await fetch(`http://127.0.0.1:8000/rooms`);
      if (!response.ok) throw new Error();
      const { rooms } = await response.json();
      dispatch(getRoomListSuccess(rooms));
    } catch (error) {
      dispatch(getRoomListFail())
    }
  }
}

const setRoomListLoading = () => {
  return {
    type: LOAD_ROOM_LIST,
    payload: {}
  }
}

const getRoomListSuccess = (rooms) => {
  return {
    type: LOAD_ROOM_LIST_SUCCESS,
    payload: { data: rooms }
  }
}

const getRoomListFail = () => {
  return {
    type: LOAD_ROOM_LIST_FAIL,
    payload: {}
  }
}

// Action Creators
export const voteRoom = (id: string, rating: number) => {
  return async (dispatch, getState) => {
    dispatch(setRoomVoting());
    try {
      const response = await fetch(`http://127.0.0.1:8000/rooms/giveReviewById?id=${id}&rating=${rating}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error();
      dispatch(setRoomVotingSuccess());
      dispatch(getRoomList());
    } catch (error) {
      dispatch(setRoomVotingFail())
    }
  }
}

const setRoomVoting = () => {
  return {
    type: VOTE_ROOM,
    payload: {}
  }
}

const setRoomVotingSuccess = (rooms) => {
  return {
    type: VOTE_ROOM_SUCCESS,
    payload: {}
  }
}

const setRoomVotingFail = () => {
  return {
    type: VOTE_ROOM_FAIL,
    payload: {}
  }
}

// Action Creators
export const filterRoomList = (happinessScore) => {
  return async (dispatch) => {
    dispatch(setRoomListLoading());
    try {
      const response = await fetch(`http://127.0.0.1:8000/rooms/filter?maxhappinessscore=${happinessScore}`);
      if (!response.ok) throw new Error();
      const { rooms } = await response.json();
      dispatch(getRoomListSuccess(rooms));
    } catch (error) {
      dispatch(getRoomListFail())
    }
  }
}

const filterRoomListLoading = () => {
  return {
    type: FILTER_ROOM_LIST,
    payload: {}
  }
}

const filterRoomListSuccess = (rooms) => {
  return {
    type: FILTER_ROOM_LIST_SUCCESS,
    payload: { data: rooms }
  }
}

const filterRoomListFail = () => {
  return {
    type: FILTER_ROOM_LIST_FAIL,
    payload: {}
  }
}

export default reducer;