import {
  VERIFICATION_FAILURE,
  VERIFICATION_LOADING,
  VERIFICATION_SUCCESS,
} from "../actionTypes";
import { setMessage } from "./message";
import axios from "axios";
import { tokenConfig } from "./auth";

export const axiosBaseURL = (axios.defaults.baseURL =
  "https://binaryvest.herokuapp.com");
export const axiosType = (axios.defaults.headers.post["Content-Type"] =
  "application/json");

export const verify = (data) => async (dispatch, getState) => {
  dispatch({
    type: VERIFICATION_LOADING,
  });

  try {
    const res = await axios.post("/user/verify", data, tokenConfig(getState));
    const response = await res.data;
    console.log(response);
    dispatch({
      type: VERIFICATION_SUCCESS,
      payload: response,
    });
    dispatch(
      setMessage(
        "Verification Successful",
        response.status,
        VERIFICATION_SUCCESS
      )
    );
  } catch (err) {
    dispatch({
      type: VERIFICATION_FAILURE,
    });
    dispatch(setMessage("Verification failed", 403, VERIFICATION_FAILURE));
  }
};
