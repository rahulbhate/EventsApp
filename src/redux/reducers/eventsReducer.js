import initialState from "./initialState";
import * as types from "../actions/actionTypes";

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.LOAD_EVENTS_SUCCESS:
      return action.events;
    default:
      return state;
  }
}
