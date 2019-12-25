import { Reducer } from "react";
import { Asset } from "../data";

const LOAD_ASSET_LIST = 'WEMProject/asset/LOAD_ASSET_LIST';
const LOAD_ASSET_LIST_SUCCESS = 'WEMProject/asset/LOAD_ASSET_LIST_SUCCESS';
const LOAD_ASSET_LIST_FAIL = 'WEMProject/asset/LOAD_ASSET_LIST_FAIL';

type GetListAction = {
  type: typeof LOAD_ASSET_LIST,
  payload: any
};

type GetListActionSuccess = {
  type: typeof LOAD_ASSET_LIST_SUCCESS,
  payload: { data: Asset[] }
}

type GetListActionFail = {
  type: typeof LOAD_ASSET_LIST_FAIL,
  payload: []
}

type ActionTypes = GetListAction | GetListActionSuccess | GetListActionFail;

// State Type
type AssetState = {
  list: Asset[],
  isLoadingList: boolean,
}

// Reducer
const reducer: Reducer<AssetState, ActionTypes> = (
  state = { list: [], isLoadingList: true }, action
) => {
  switch (action.type) {
    case LOAD_ASSET_LIST: {
      return { ...state, isLoadingList: true };
    }
    case LOAD_ASSET_LIST_SUCCESS: {
      return { ...state, list: action.payload.data, isLoadingList: false }
    }
    case LOAD_ASSET_LIST_FAIL: {
      return { ...state, isLoadingList: false }
    }
    default: return state;
  }
};

// Action Creators
export const getAssetList = (roomId) => {
  var response;

  return async (dispatch) => {
    dispatch(setAssetListLoading());
    try {
      if(roomId){
        response = await fetch(`http://127.0.0.1:8000/assetsByRoomId?roomId=${roomId}`);
      } else{
        response = await fetch(`http://127.0.0.1:8000/assets`);
      }
      
      if (!response.ok) throw new Error();
      const { assets }: { assets: Asset[] } = await response.json();
      dispatch(getAssetListSuccess(assets));
    } catch (error) {
      dispatch(getAssetListFail())
    }
  }
}

const setAssetListLoading = () => {
  return {
    type: LOAD_ASSET_LIST,
    payload: {}
  }
}

const getAssetListSuccess = (assets: Asset[]) => {
  return {
    type: LOAD_ASSET_LIST_SUCCESS,
    payload: { data: assets }
  }
}

const getAssetListFail = () => {
  return {
    type: LOAD_ASSET_LIST_FAIL,
    payload: {}
  }
}

export default reducer;