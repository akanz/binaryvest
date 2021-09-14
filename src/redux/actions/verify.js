import {
  ALL_REQUESTS_FAILURE,
  ALL_REQUESTS_LOADING,
  ALL_REQUESTS_SUCCESS,
  CONFIRM_DEP_FAILURE,
  CONFIRM_VER_FAILURE,
  CONFIRM_VER_LOADING,
  CONFIRM_VER_SUCCESS,
  VERIFICATION_FAILURE,
  VERIFICATION_LOADING,
  VERIFICATION_SUCCESS,
  VER_REQUEST_FAILURE,
  VER_REQUEST_LOADING,
  VER_REQUEST_SUCCESS,
} from "../actionTypes";
import { setMessage } from "./message";
import axios from "axios";
import { tokenConfig } from "./auth";

export const axiosBaseURL = (axios.defaults.baseURL =
  "https://binaryvest.herokuapp.com");
export const axiosType = (axios.defaults.headers.post["Content-Type"] =
  "application/json");

// user verification
export const verify = (data) => async (dispatch, getState) => {
  const customHeader = {
    headers: {
      "Content-type": '*/*',
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };
  console.log(data);
  const body = JSON.stringify({
    name: data.username,
    phone: data.phone_no,
    label: data.id_type,
    ssn: data.ssn,
    avatar: data.imgData,
    // avatar: data.backPage,
  });
  console.log(body);
  dispatch({
    type: VERIFICATION_LOADING,
  });

  try {
    const res = await axios.post("/user/verify", body, customHeader);
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
    console.log(err.response);
    dispatch({
      type: VERIFICATION_FAILURE,
    });
    dispatch(
      setMessage(
        err.response.data.error,
        err.response.status,
        VERIFICATION_FAILURE
      )
    );
  }
};

// ADMIN ROUTES

// Get all verification requests
export const getAllRequests = () => async (dispatch, getState) => {
  dispatch({
    type: ALL_REQUESTS_LOADING,
  });
  try {
    const res = await axios.get("/admin/verify", tokenConfig(getState));
    const response = await res.data;
    console.log(response);
    dispatch({
      type: ALL_REQUESTS_SUCCESS,
      payload: response,
    });
    dispatch(setMessage("Gotten all requests", 200, ALL_REQUESTS_SUCCESS));
  } catch (error) {
    dispatch({
      type: ALL_REQUESTS_FAILURE,
    });
    dispatch(
      setMessage(
        "Unable to get verification requests",
        400,
        ALL_REQUESTS_FAILURE
      )
    );
  }
};

// get a verification request
export const getVerRequest = (id) => async (dispatch, getState) => {
  dispatch({
    type: VER_REQUEST_LOADING,
  });
  try {
    const res = await axios.get(`/admin/verify/${id}`, tokenConfig(getState));
    const response = await res.data;
    console.log(response);
    dispatch({
      type: VER_REQUEST_SUCCESS,
      payload: response,
    });
    dispatch(setMessage("Request gotten", 200, VER_REQUEST_SUCCESS));
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: VER_REQUEST_FAILURE,
    });
    dispatch(
      setMessage("Unable to get verification request", 400, VER_REQUEST_FAILURE)
    );
  }
};

// Verify a user
export const verifyReq =
  ({ id, status }) =>
  async (dispatch, getState) => {
    dispatch({
      type: CONFIRM_VER_LOADING,
    });
    try {
      const res = await axios.patch(
        `/admin/verify/${id}`,
        { status: status },
        tokenConfig(getState)
      );
      const response = await res.data;
      console.log(response);
      dispatch({
        type: CONFIRM_VER_SUCCESS,
        payload: response,
      });
      dispatch(setMessage("User verified", 200, CONFIRM_VER_SUCCESS));
    } catch (error) {
      dispatch({
        type: CONFIRM_VER_FAILURE,
      });
      dispatch(setMessage("Verification failed", 400, CONFIRM_DEP_FAILURE));
    }
  };
