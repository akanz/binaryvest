import { CLEAR_MESSAGE, SET_MESSAGE } from "../actionTypes";

export const setMessage = (message, status, id = null) => ({
  type: SET_MESSAGE,
  payload: { message, status, id },
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});
