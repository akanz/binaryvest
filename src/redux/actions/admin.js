import {
  ALL_USERS_ERROR,
  ALL_USERS_LOADED,
  ALL_USERS_LOADING,
  CONFIRM_DEP_FAILURE,
  CONFIRM_DEP_LOADING,
  CONFIRM_DEP_SUCCESS,
  CREATE_PLAN_LOADING,
  CREATE_PLAN_FAILURE,
  CREATE_PLAN_SUCCESS,
  GET_PLANS_FAILURE,
  GET_PLANS_LOADING,
  GET_PLANS_SUCCESS,
  GET_PLAN_FAILURE,
  GET_PLAN_LOADING,
  GET_PLAN_SUCCESS,
  UPDATE_PLAN_LOADING,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  UPDATE_PLAN_SUCCESS,
  UPDATE_PLAN_FAILURE,
  DELETE_PLAN_LOADING,
  DELETE_PLAN_SUCCESS,
  DELETE_PLAN_FAILURE,
  ALL_DEPOSITS_LOADING,
  ALL_DEPOSITS_SUCCESS,
  ALL_DEPOSITS_FAILURE,
  USER_DEPS_LOADING,
  USER_DEPS_SUCCESS,
  USER_DEPS_FAILURE,
} from "../actionTypes";
import { clearMessage, setMessage } from "./message";
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
    dispatch({
      type: ALL_USERS_LOADED,
      payload: data,
    });
    dispatch(
      setMessage("All users gotten successfully", data.status, ALL_USERS_LOADED)
    );
  } catch (err) {
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
  dispatch({
    type: CREATE_PLAN_LOADING,
  });
  axios
    .post("/admin/createInvestmentPlan", data)
    .then((res) => {
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
      dispatch(
        setMessage(
          err.response.data.error,
          err.response.status,
          CREATE_PLAN_FAILURE
        )
      );
    });
};

// Get All Investment plans
export const getPlans = () => async (dispatch) => {
  dispatch({
    type: GET_PLANS_LOADING,
  });
  try {
    const res = await axios.get("/admin/investmentPlans");
    const data = await res.data.data;
    dispatch({
      type: GET_PLANS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_PLANS_FAILURE,
    });
    dispatch(setMessage("Unable to Get plans", 400, GET_PLANS_FAILURE));
  }
};

// Get An Investment plan
export const getPlan = (id) => async (dispatch, getState) => {
  dispatch({
    type: GET_PLAN_LOADING,
  });
  try {
    const res = await axios.get(`admin/plan/${id}`);
    const data = res.data;
    dispatch({
      type: GET_PLAN_SUCCESS,
      payload: data,
    });
    dispatch(setMessage("Successfully Gotten plan", 200, GET_PLAN_SUCCESS));
  } catch (err) {
    dispatch({
      type: GET_PLAN_FAILURE,
    });
    dispatch(setMessage("Unable to get Plan", 400, GET_PLAN_FAILURE));
  }
};
// Update Investment plan
export const updatePlan = (values) => async (dispatch, getState) => {
  dispatch({
    type: UPDATE_PLAN_LOADING,
  });
  const { name, roi, minAmount, maxAmount } = values;
  const data = {
    name: name,
    roi: roi,
    minAmount: minAmount,
    maxAmount: maxAmount,
  };
  try {
    const res = await axios.patch(
      `admin/update-investmentPlan/${values.id}`,
      data,
      tokenConfig(getState)
    );
    const response = res.data;
    dispatch({
      type: UPDATE_PLAN_SUCCESS,
      payload: response,
    });
    dispatch(
      setMessage(response.message, response.status, UPDATE_PLAN_SUCCESS)
    );
  } catch (error) {
    dispatch(setMessage("Unable to update package", 400, UPDATE_PLAN_FAILURE));
  }
};

// delete Investment plan
export const deletePlan = (id) => async (dispatch, getState) => {
  dispatch({
    type: DELETE_PLAN_LOADING,
  });
  try {
    const res = await axios.delete(`/admin/plan/${id}`, tokenConfig(getState));
    const response = await res.data;
    dispatch({
      type: DELETE_PLAN_SUCCESS,
      payload: response,
    });
    dispatch(setMessage("Deleted plan successfully", 200, DELETE_PLAN_SUCCESS));
  } catch (error) {
    dispatch({
      type: DELETE_PLAN_FAILURE,
    });
    dispatch(setMessage("Unable to delete plan", 400, DELETE_PLAN_FAILURE));
  }
};

// get all deposits
export const allDeposits = () => async (dispatch, getState) => {
  dispatch({
    type: ALL_DEPOSITS_LOADING,
  });
  try {
    const res = await (
      await axios.get("/admin/all-investments", tokenConfig(getState))
    ).data;
    dispatch({
      type: ALL_DEPOSITS_SUCCESS,
      payload: res.data,
    });
    dispatch(
      setMessage("All deposit requests gotten", 200, ALL_DEPOSITS_SUCCESS)
    );
  } catch (error) {
    dispatch({
      type: ALL_DEPOSITS_FAILURE,
    });
    dispatch(
      setMessage(
        error.response.data.error,
        error.response.status,
        ALL_DEPOSITS_FAILURE
      )
    );
  }
};

// get user deposits by id (admin view)
export const allUserDeposits = (id) => async (dispatch, getState) => {
  dispatch({
    type: USER_DEPS_LOADING,
  });
  try {
    const res = await (
      await axios.get(`/admin/users/investments/${id}`, tokenConfig(getState))
    ).data;
    dispatch({
      type: USER_DEPS_SUCCESS,
      payload: res.data,
    });
    dispatch(
      setMessage("gotten all deposits of the user", 200, USER_DEPS_SUCCESS)
    );
    setTimeout(() => {
      dispatch(clearMessage())
    }, 3000);
  } catch (error) {
    dispatch({
      type: USER_DEPS_FAILURE,
    });
    dispatch(setMessage("Unable to get all user deposits", 400, USER_DEPS_FAILURE));
  }
};

// Add money to user wallet(the function name is meant to be addMoney
// but I cant't change it now cause I'll have to change everywhere)
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

// confirm deposit (same for the function above. meant to be confirm deposit)

export const addMoney = (id) => async (dispatch, getState) => {
  try {
    const res = await (
      await axios.post(
        `/admin/users/approveInvestment/${id}`,
        { status: true },
        tokenConfig(getState)
      )
    ).data;
    dispatch(setMessage('Deposit approved', res.status, CONFIRM_DEP_SUCCESS));
    window.location.replace('/admin')
  } catch (error) {
    dispatch(
      setMessage(
        error.response.data.error,
        error.response.data.status,
        CONFIRM_DEP_FAILURE
      )
    );
  }
};
