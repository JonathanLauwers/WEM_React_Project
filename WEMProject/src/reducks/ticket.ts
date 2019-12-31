import { Reducer } from "react";
import { Ticket } from "../data";

const LOAD_TICKET_LIST = 'WEMProject/ticket/LOAD_TICKET_LIST';
const LOAD_TICKET_LIST_SUCCESS = 'WEMProject/ticket/LOAD_TICKET_LIST_SUCCESS';
const LOAD_TICKET_LIST_FAIL = 'WEMProject/ticket/LOAD_TICKET_LIST_FAIL';

const LOAD_TICKET_DETAIL = 'WEMProject/ticket/LOAD_TICKET_DETAIL';
const LOAD_TICKET_DETAIL_SUCCESS = 'WEMProject/ticket/LOAD_TICKET_DETAIL_SUCCESS';
const LOAD_TICKET_DETAIL_FAIL = 'WEMProject/ticket/LOAD_TICKET_DETAIL_FAIL';

const CREATE_TICKET = 'WEMProject/ticket/CREATE_TICKET';
const CREATE_TICKET_SUCCESS = 'WEMProject/ticket/CREATE_TICKET_SUCCESS';
const CREATE_TICKET_FAIL = 'WEMProject/ticket/CREATE_TICKET_FAIL';

type GetListAction = {
  type: typeof LOAD_TICKET_LIST,
  payload: any
};

type GetListActionSuccess = {
  type: typeof LOAD_TICKET_LIST_SUCCESS,
  payload: { data: Ticket[] }
}

type GetListActionFail = {
  type: typeof LOAD_TICKET_LIST_FAIL,
  payload: []
}

type GetDetailAction = {
  type: typeof LOAD_TICKET_DETAIL,
  payload: { id: string }
};

type GetDetailActionSuccess = {
  type: typeof LOAD_TICKET_DETAIL_SUCCESS,
  payload: { data: Ticket }
}

type GetDetailActionFail = {
  type: typeof LOAD_TICKET_DETAIL_FAIL,
  payload: {}
}

type CreateTicketAction = {
  type: typeof CREATE_TICKET;
  payload: { data: Ticket };
};

type CreateTicketActionSuccess = {
  type: typeof CREATE_TICKET_SUCCESS;
  payload: { data: Ticket };
};

type CreateTicketActionFail = {
  type: typeof CREATE_TICKET_FAIL;
  payload: {};
};

type ActionTypes = GetListAction | GetListActionSuccess | GetListActionFail | GetDetailAction | GetDetailActionSuccess | GetDetailActionFail | CreateTicketAction | CreateTicketActionSuccess | CreateTicketActionFail;

// State Type
type TicketState = {
  list: Ticket[],
  isLoadingList: boolean,
  detail: Ticket,
  isLoadingDetail: boolean,
  isLoadingCreate: boolean,
  errors: { [key: string]: string[] };
}

// Reducer
const reducer: Reducer<TicketState, ActionTypes> = (
  state = { list: [], isLoadingList: true, detail: null, isLoadingDetail: true ,isLoadingCreate: false}, action
) => {
  switch (action.type) {
    case LOAD_TICKET_LIST: {
      return { ...state, isLoadingList: true };
    }
    case LOAD_TICKET_LIST_SUCCESS: {
      return { ...state, list: action.payload.data, isLoadingList: false }
    }
    case LOAD_TICKET_LIST_FAIL: {
      return { ...state, isLoadingList: false }
    }
    case LOAD_TICKET_DETAIL: {
      return { ...state, isLoadingDetail: true };
    }
    case LOAD_TICKET_DETAIL_SUCCESS: {
      return { ...state, detail: action.payload.data, isLoadingDetail: false }
    }
    case LOAD_TICKET_DETAIL_FAIL: {
      return { ...state, isLoadingDetail: false }
    }
    case CREATE_TICKET: {
      return { ...state, isLoadingCreate: true };
    }
    case CREATE_TICKET_SUCCESS: {
      return { ...state, isLoadingCreate: false };
    }
    case CREATE_TICKET_FAIL: {
      return { ...state, isLoadingCreate: false };
    }
    default: return state;
  }
};

// Action Creators
export const getTicketList = (assetName) => {
  var response;
  return async (dispatch) => {
    dispatch(setTicketListLoading());
    try {
      if(assetName){
        response = await fetch(`http://127.0.0.1:8000/ticketsByAssetName?assetname=${assetName}`);
      } else{
        response = await fetch(`http://127.0.0.1:8000/tickets`);
      }

      if (!response.ok) throw new Error();
      const { tickets }: { tickets: Ticket[] } = await response.json();
      dispatch(getTicketListSuccess(tickets));
    } catch (error) {
      dispatch(getTicketListFail())
    }
  }
}

const setTicketListLoading = () => {
  return {
    type: LOAD_TICKET_LIST,
    payload: {}
  }
}

const getTicketListSuccess = (tickets: Ticket[]) => {
  return {
    type: LOAD_TICKET_LIST_SUCCESS,
    payload: { data: tickets }
  }
}

const getTicketListFail = () => {
  return {
    type: LOAD_TICKET_LIST_FAIL,
    payload: {}
  }
}

export const getTicket = (id: string) => {
  return async (dispatch) => {
    dispatch(setTicketDetailLoading());
    try {
      const response = await fetch(`http://127.0.0.1:8000/tickets/${id}`);
      if (!response.ok) throw new Error();
      const { ticket }: { ticket: Ticket } = await response.json();
      dispatch(getTicketSuccess(ticket));
    } catch (error) {
      dispatch(getTicketFail())
    }
  }
}

const setTicketDetailLoading = () => {
  return {
    type: LOAD_TICKET_DETAIL,
    payload: {}
  }
}

const getTicketSuccess = (ticket: Ticket) => {
  return {
    type: LOAD_TICKET_DETAIL_SUCCESS,
    payload: { data: ticket }
  }
}

const getTicketFail = () => {
  return {
    type: LOAD_TICKET_DETAIL_FAIL,
    payload: {}
  }
}

export const createTicket = (ticket: TicketData) => {
  return async (dispatch, getState) => {
    dispatch(setCreateTicketLoading());
    try {
      const response = await fetch(`http://127.0.0.1:8000/tickets/create?name=${ticket.assetName}&description=${ticket.description}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        } 
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.errors);
      dispatch(createTicketSuccess(body));
      dispatch(getTicketList(ticket.assetName));
    } catch (error) {
      dispatch(createTicketFail());
    }
  };
};

const setCreateTicketLoading = () => {
  return {
    type: CREATE_TICKET,
    payload: {}
  }
}

const createTicketSuccess = (tickets: Ticket[]) => {
  return {
    type: CREATE_TICKET_SUCCESS,
    payload: { data: tickets }
  };
};

const createTicketFail = () => {
  return {
    type: CREATE_TICKET_FAIL,
    payload: {}
  };
};

export default reducer;