import { VERIFICATION_FAILURE, VERIFICATION_SUCCESS } from "../actionTypes";
import { setMessage } from "./message";

export const verify = (data) => (dispatch) => {
  try {
    dispatch({
      type: VERIFICATION_SUCCESS,
      payload: data,
    });
    dispatch(setMessage("Verification Successful", 200, VERIFICATION_SUCCESS));
  } catch (err) {
    dispatch({
      type: VERIFICATION_FAILURE,
    });
    dispatch(setMessage("Verification Failed", 403, VERIFICATION_FAILURE));
  }
};
