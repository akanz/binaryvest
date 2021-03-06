import { setMessage, clearMessage } from "./message";
import {
  AUTH_ERROR,
  CONFIRM_RESET_FAILURE,
  CONFIRM_RESET_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  RESET_ERROR,
  RESET_SUCCESS,
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
  });
  axios
    .post("/signup", body)
    .then((response) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,
      });
      dispatch(
        setMessage(
          "signup successful, you will be redirected to login shortly",
          response.data.status,
          REGISTER_SUCCESS
        )
      );
      setTimeout(() => {
        window.location.replace("/login");
      }, 2000);
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
  });
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
  // window.location.replace('/')
};

// Forgot password
export const forgotPass = (email) => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
  try {
    const res = await (await axios.post("/forgotPassword", email)).data;
    dispatch({
      type: RESET_SUCCESS,
      payload: res,
    });
    dispatch(setMessage("Password reset sent, please check your mail", 200));
  } catch (error) {
    dispatch({
      type: RESET_ERROR,
    });
    if (error !== undefined) {
      dispatch(
        setMessage(
          error.response.data.error,
          error.response.data.status,
          RESET_ERROR
        )
      );
    }
  }
};

// Reset password
export const resetPass = (values) => async (dispatch) => {
  dispatch({
    type: USER_LOADING,
  });
  const info = {
    password: values.password,
    confirmPassword: values.confirmPassword,
  };
  try {
    const res = await (
      await axios.post(`/resetPassword/${values.ressettoken}`, info)
    ).data;
    dispatch({
      type: CONFIRM_RESET_SUCCESS,
      payload: res,
    });
    dispatch(setMessage(res.message, res.status, CONFIRM_RESET_SUCCESS));
    setTimeout(() => {
      window.location.replace("/login");
    }, 3500);
  } catch (error) {
    dispatch({
      type: CONFIRM_RESET_FAILURE,
    });
    dispatch(
      setMessage(
        error.response.data.error,
        error.response.data.status,
        CONFIRM_RESET_FAILURE
      )
    );
  }
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

// upload profile picture
export const upload = (data) => async (dispatch, getState) => {
  const customHeader = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };
  dispatch({
    type: USER_LOADING,
  });
  const id = data.get("id");
  const avatar = data.get("avatar");
  console.log(avatar);
  try {
    const res = await (
      await axios.post(`/user/upload/${id}`, data, customHeader)
    ).data;
    dispatch(setMessage("Profile pic uploaded", 200, "UPLOAD_SUCCESS"));
    
  } catch (error) {
    dispatch(setMessage(error.response.data.error, 400, "UPLOAD_FAIL"));
  }
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
