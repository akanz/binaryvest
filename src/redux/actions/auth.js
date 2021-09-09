import { setMessage, clearMessage } from "./message";
import {
  AUTH_ERROR,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
} from "../actionTypes";
import axios from "axios";

axios.defaults.baseURL = "https://binaryvest.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Post request to REGISTER
export const register = (data) => (dispatch) => {
  const body = JSON.stringify(data);

  dispatch({
    type: USER_LOADING,
  })
  axios
    .post("/signup", body)
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
      dispatch(
        setMessage(
          "signup successful, please proceed to login",
          response.data.status,
          REGISTER_SUCCESS
        )
      );
    })
    .catch((err) => {
      if (err !== undefined) {
        dispatch({
          type: REGISTER_FAILURE,
        });
        dispatch(
          setMessage(
            err.response.data.error,
            err.response.status,
            REGISTER_FAILURE
          )
        );
      }
    });
};

// Post request to Login
export const login = (data) => (dispatch) => {
  dispatch({
    type: USER_LOADING,
  })
  const body = JSON.stringify(data);
  axios
    .post("/login", body)
    .then((response) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      dispatch(
        setMessage(
          `welcome back, ${response.data.data.username}`,
          response.data.status,
          LOGIN_SUCCESS
        )
      );
    })

    .catch((err) => {
      if (err !== undefined) {
        dispatch(
          setMessage(
            err.response.data.error,
            err.response.status,
            LOGIN_FAILURE
          )
        );
        dispatch({
          type: LOGIN_FAILURE,
        });
      } else {
        console.log("Page not found");
      }
    });
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch(clearMessage());
};

// check token && load user
export const loadUser = () => (dispatch, getState) => {
  // user loading
  dispatch({
    type: USER_LOADING,
  });

  axios
    .get("/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      console.log(res);
    })
    .catch((err) => {
      if (err.response !== undefined) {
        dispatch({
          type: AUTH_ERROR,
        });
        dispatch(setMessage(err.response.data.message, err.response.status));
      } else {
        console.error("Page Not found");
      }
    });
};

// token configuration
export const tokenConfig = (getState) => {
  // get token from localstorage
  const token = getState().auth.token;

  //   if there's a token, add it to header
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
