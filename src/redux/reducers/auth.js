import {
  AUTH_ERROR,
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

const initialState = {
  token: localStorage.getItem("userToken"),
  isAuthenticated: null ,
  isLoading: false,
  data: null,
  success: null,
  status: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        data: action.payload.data,
        success: action.payload.success,
        status: action.payload.status,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
        localStorage.setItem('userToken', action.payload.token)
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
      };
    case RESET_SUCCESS:
      return {
        ...state,
        ...action.payload,
        token: null,
        data: null,
        isAuthenticated: false,
        isLoading: false,
      }
    case AUTH_ERROR:
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
    case RESET_ERROR:
    case LOGOUT:
      localStorage.removeItem("userToken");
      return {
        ...state,
        token: null,
        data: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
