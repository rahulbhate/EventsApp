import * as types from "./actionTypes";

function loadEventsSuccess(events) {
  return { type: types.LOAD_EVENTS_SUCCESS, events };
}

/* First Redux Thunk middleware to handle async call - middleware 
which is function.
This is optional - we can use fetch or axios library to handle 
//async calls to API */