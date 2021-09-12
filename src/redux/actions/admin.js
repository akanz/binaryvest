import {
  ALL_USERS_ERROR,
  ALL_USERS_LOADED,
  ALL_USERS_LOADING,
  CONFIRM_DEP_FAILURE,
  CONFIRM_DEP_LOADING,
  CONFIRM_DEP_SUCCESS,
  CONFIRM_VER_SUCCESS,
  CREATE_PLAN_FAILURE,
  CREATE_PLAN_SUCCESS,
  GET_PLANS_FAILURE,
  GET_PLANS_LOADING,
  GET_PLANS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
} from "../actionTypes";
import { setMessage } from "./message";
import axios from "axios";
import { tokenConfig } from "./auth";

axios.defaults.baseURL = "https://binaryvest.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

// get all users
export const allUsers = () => async (dispatch, getState) => {
  dispatch({
    type: ALL_USERS_LOADING,
  });
  try {
    const res = await axios.get("/admin/users", tokenConfig(getState));
    const data = await res.data;
    console.log(data);
    dispatch({
      type: ALL_USERS_LOADED,
      payload: data,
    });
    dispatch(
      setMessage("All users gotten successfully", data.status, ALL_USERS_LOADED)
    );
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: ALL_USERS_ERROR,
    });
    dispatch(
      setMessage(
        err.response.data.message,
        err.response.data.status,
        ALL_USERS_ERROR
      )
    );
  }
};

// get a user by ID
export const getUserById = (id) => async (dispatch, getState) => {
  dispatch({
    type: GET_USER_LOADING,
  });

  try {
    const res = await axios.get(`/user/${id}`, tokenConfig(getState));
    const data = await res.data;
    console.log(data);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_USER_ERROR,
    });
    dispatch(
      setMessage(
        err.response.error.message,
        err.response.status,
        GET_USER_ERROR
      )
    );
  }
};

// create investment plan
export const createPlan = (data) => (dispatch) => {
  axios
    .post("/admin/createInvestmentPlan", data)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: CREATE_PLAN_SUCCESS,
        payload: res.data,
      });
      dispatch(
        setMessage(res.data.message, res.data.status, CREATE_PLAN_SUCCESS)
      );
    })
    .catch((err) => {
      dispatch({
        type: CREATE_PLAN_FAILURE,
      });
      dispatch(setMessage(err.response.data.error));
    });
};

// Get Investment plan
export const getPlans = () => async (dispatch) => {
  dispatch({
    type: GET_PLANS_LOADING,
  });
  try {
    const res = await axios.get("/admin/investmentPlans");
    const data = await res.data.data;
    console.log(data)
    dispatch({
      type: GET_PLANS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_PLANS_FAILURE,
    });
    dispatch(setMessage("Unable to Get plans", 400, GET_PLANS_FAILURE));
  }
};

// Update Investment plan
export const updatePlan = (id) => async (dispatch, getState) => {
  try {
    // const res = await axios.post(
    //   `admin/update-investmentPlan/${id}`,
    //   data,
    //   tokenConfig(getState)
    // );
    // const response = res.data;
    // dispatch({
    //   type:
    // })
  } catch (error) {}
};

// confirm deposit
export const confirmDeposit = (value) => async (dispatch, getState) => {
  dispatch({
    type: CONFIRM_DEP_LOADING,
  });
  const body = JSON.stringify({
    amount: value.amount,
    userId: value.userId,
  });

  try {
    const res = await axios.post(
      "/admin/users/balance",
      body,
      tokenConfig(getState)
    );
    const data = await res.data;
    console.log(data);

    dispatch({
      type: CONFIRM_DEP_SUCCESS,
      payload: data,
    });
    dispatch(setMessage(data.message, data.status, CONFIRM_DEP_SUCCESS));
  } catch (err) {
    dispatch({
      type: CONFIRM_DEP_FAILURE,
    });
    dispatch(
      setMessage(err.response.message, err.response.status, CONFIRM_DEP_SUCCESS)
    );
  }
};

// verify a user
export const verifyUser = (value) => (dispatch) => {
  try {
    dispatch({
      type: CONFIRM_VER_SUCCESS,
      payload: value,
    });
    dispatch(
      setMessage(
        "User has been successfully verified",
        200,
        CONFIRM_VER_SUCCESS
      )
    );
  } catch (err) {
    console.log(err);
  }
};
