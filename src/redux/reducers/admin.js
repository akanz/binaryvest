import {
  ALL_USERS_ERROR,
  ALL_USERS_LOADED,
  ALL_USERS_LOADING,
  CONFIRM_DEP_LOADING,
  CONFIRM_DEP_SUCCESS,
  CREATE_PLAN_SUCCESS,
  GET_PLANS_LOADING,
  GET_PLANS_SUCCESS,
  GET_USER_ERROR,
  GET_USER_LOADING,
  GET_USER_SUCCESS,
  UPDATE_PLAN_SUCCESS,
} from "../actionTypes";

const initialState = {
  allUsers: {},
  allPackages: [],
  package: [],
  user: {},
  isLoading: false,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_USERS_LOADING:
    case GET_USER_LOADING:
    case CONFIRM_DEP_LOADING:
    case GET_PLANS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ALL_USERS_LOADED:
      return {
        ...state,
        allUsers: action.payload.data.users,
        isLoading: false,
      };
    case ALL_USERS_ERROR:
      return {
        ...state,
        allUsers: {},
        isLoading: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        user: {},
        isLoading: false,
      };
    case CREATE_PLAN_SUCCESS:
    case UPDATE_PLAN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        package: action.payload.data,
      };
    case GET_PLANS_SUCCESS:
      return {
        ...state,
        allPackages: action.payload,
        isLoading: false,
      };
    case CONFIRM_DEP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;
