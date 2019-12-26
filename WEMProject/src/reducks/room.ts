import { Reducer } from "react";
import { Room } from "../data";

const LOAD_ROOM_LIST = 'WEMProject/room/LOAD_ROOM_LIST';
const LOAD_ROOM_LIST_SUCCESS = 'WEMProject/room/LOAD_ROOM_LIST_SUCCESS';
const LOAD_ROOM_LIST_FAIL = 'WEMProject/room/LOAD_ROOM_LIST_FAIL';

const VOTE_ROOM = 'WEMProject/room/VOTE_ROOM';
const VOTE_ROOM_SUCCESS = 'WEMProject/room/VOTE_ROOM_SUCCESS';
const VOTE_ROOM_FAIL = 'WEMProject/room/VOTE_ROOM_FAIL';


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

type ActionTypes = GetListAction | GetListActionSuccess | GetListActionFail | VoteRoomAction | VoteRoomActionSuccess | VoteRoomActionFail;

// State Type
type RoomState = {
  list: Room[],
  isLoadingList: boolean,
  isVoting: boolean,
}

// Reducer
const reducer: Reducer<RoomState, ActionTypes> = (
  state = { list: [], isLoadingList: true, isVoting: true }, action
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
      return { ...state, isLoadingList: false }
    }
    case VOTE_ROOM_FAIL: {
      return { ...state, isLoadingList: false }
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
    dispatch(setRoomListLoading());
    try {
      const response = await fetch(`http://127.0.0.1:8000/rooms/giveReviewById?id=${id}&rating=${rating}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error();
      const { rooms } = await response.json();
      dispatch(getRoomListSuccess(rooms));
    } catch (error) {
      dispatch(getRoomListFail())
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

export default reducer;