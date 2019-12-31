import { Reducer } from "react";
import { Room } from "../data";


const UPLOAD_PICTURE = 'WEMProject/camera/UPLOAD_PICTURE';
const UPLOAD_PICTURE_SUCCESS = 'WEMProject/camera/UPLOAD_PICTURE_SUCCESS';
const UPLOAD_PICTURE_FAIL = 'WEMProject/camera/UPLOAD_PICTURE_FAIL';

type UploadPictureAction = {
  type: typeof UPLOAD_PICTURE,
  payload: any
};

type UploadPictureActionSuccess = {
  type: typeof UPLOAD_PICTURE_SUCCESS,
  payload: []
}

type UploadPictureActionFail = {
  type: typeof UPLOAD_PICTURE_FAIL,
  payload: []
}

type ActionTypes = UploadPictureAction | 
  UploadPictureActionSuccess | 
  UploadPictureActionFail ;

// State Type
type UploadState = {
  isUploading: boolean,
}

// Reducer
const reducer: Reducer<UploadState, ActionTypes> = (
  state = { isUploading: false }, action
) => {
  switch (action.type) {
    case UPLOAD_PICTURE: {
      return { ...state, isUploading: true };
    }
    case UPLOAD_PICTURE_SUCCESS: {
      return { ...state, isUploading: false }
    }
    case UPLOAD_PICTURE_FAIL: {
      return { ...state, isUploading: false }
    }
    default: return state;
  }
};

// Action Creators
export const uploadPicture = (id: string, base64: string) => {
  return async (dispatch, getState) => {
      dispatch(setPictureUploading());
    try {
      const response = await fetch(`http://127.0.0.1:8000/assets/uploadImageById?id=${id}&image=${encodeURIComponent(base64)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error();
      dispatch(setPictureUploadingSuccess());
      //dispatch(getRoomList());
    } catch (error) {
      dispatch(setPictureUploadingFail())
    } 
  }
}

const setPictureUploading = () => {
  return {
    type: UPLOAD_PICTURE,
    payload: {}
  }
}

const setPictureUploadingSuccess = () => {
  return {
    type: UPLOAD_PICTURE_SUCCESS,
    payload: {}
  }
}

const setPictureUploadingFail = () => {
  return {
    type: VOTE_ROOM_FAIL,
    payload: {}
  }
}

export default reducer;