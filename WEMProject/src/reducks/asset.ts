import { Reducer } from "react";
import { Asset } from "../data";
import { API } from "../utils/APISettings";

const LOAD_ASSET_LIST = 'WEMProject/asset/LOAD_ASSET_LIST';
const LOAD_ASSET_LIST_SUCCESS = 'WEMProject/asset/LOAD_ASSET_LIST_SUCCESS';
const LOAD_ASSET_LIST_FAIL = 'WEMProject/asset/LOAD_ASSET_LIST_FAIL';

const LOAD_ASSET_LIST_BY_ID = 'WEMProject/asset/LOAD_ASSET_LIST_BY_ID';
const LOAD_ASSET_LIST_BY_ID_SUCCESS = 'WEMProject/asset/LOAD_ASSET_LIST_BY_ID_SUCCESS';
const LOAD_ASSET_LIST_BY_ID_FAIL = 'WEMProject/asset/LOAD_ASSET_LIST_BY_ID_FAIL';



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

type GetListByIdAction = {
  type: typeof LOAD_ASSET_LIST_BY_ID,
  payload: any
};


type GetListByIdActionSuccess = {
  type: typeof LOAD_ASSET_LIST_BY_ID_SUCCESS,
  payload: { data: Asset[] }
}

type GetListByIdActionFail = {
  type: typeof LOAD_ASSET_LIST_BY_ID_FAIL,
  payload: []
}

type ActionTypes = GetListAction | GetListActionSuccess | GetListActionFail | GetListByIdAction | GetListByIdActionSuccess | GetListByIdActionFail;

// State Type
type AssetState = {
  list: Asset[],
  listById: Asset[],
  isLoadingList: boolean,
  isLoadingListById: boolean,

}

// Reducer
const reducer: Reducer<AssetState, ActionTypes> = (
  state = { list: [], listById: [], isLoadingList: true }, action
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

    case LOAD_ASSET_LIST_BY_ID: {
      return { ...state, isLoadingListById: true }
    }    
    case LOAD_ASSET_LIST_BY_ID_SUCCESS: {
      return { ...state, listById: action.payload.data, isLoadingListById: false }
    }
    case LOAD_ASSET_LIST_BY_ID_FAIL: {
      return { ...state, isLoadingListById: false }
    }
    default: return state;
  }
};

// Action Creators
export const getAssetList = () => {
  var response;
  return async (dispatch) => {
    dispatch(setAssetListLoading());
    try {
      response = await fetch(`${API}/assets`);

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

// Action Creators
export const getAssetListById = (roomId) => {
  var response;

  return async (dispatch) => {
    dispatch(setAssetListByIdLoading());
    try {
      response = await fetch(`${API}/assetsByRoomId?roomId=${roomId}`);
      
      if (!response.ok) throw new Error();
      const { assets }: { assets: Asset[] } = await response.json();
      dispatch(getAssetListByIdSuccess(assets));
    } catch (error) {
      dispatch(getAssetListByIdFail())
    }
  }
}

const setAssetListByIdLoading = () => {
  return {
    type: LOAD_ASSET_LIST_BY_ID,
    payload: { }
  }
}

const getAssetListByIdSuccess = (assets: Asset[]) => {
  return {
    type: LOAD_ASSET_LIST_BY_ID_SUCCESS,
    payload: { data: assets }
  }
}

const getAssetListByIdFail = () => {
  return {
    type: LOAD_ASSET_LIST_BY_ID_FAIL,
    payload: { }
  }
}

export default reducer;