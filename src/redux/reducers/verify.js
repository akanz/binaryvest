import {
  ALL_REQUESTS_FAILURE,
  ALL_REQUESTS_LOADING,
  ALL_REQUESTS_SUCCESS,
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

const initialState = {
  allRequest: [],
  request: {},
  verifiedUser: {},
  userRequest: {},
  isLoading: false,
};

const verificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFICATION_LOADING:
    case CONFIRM_VER_LOADING:
    case ALL_REQUESTS_LOADING:
    case VER_REQUEST_LOADING:
      return { ...state, isLoading: true };
    case VERIFICATION_SUCCESS:
      return { ...state, userRequest: action.payload, isLoading: false };
    case VERIFICATION_FAILURE:
      return { ...state, userRequest: {}, isLoading: false };
    case ALL_REQUESTS_SUCCESS:
      return {
        ...state,
        allRequest: action.payload.data,
        isLoading: false,
      };
    case ALL_REQUESTS_FAILURE:
      return {
        ...state,
        allRequest: [],
        isLoading: false,
      };
    case VER_REQUEST_SUCCESS:
      return {
        ...state,
        request: action.payload.data,
        isLoading: false,
      };
    case CONFIRM_VER_SUCCESS:
      return {
        ...state,
        verifiedUser: action.payload.data,
        isLoading: false,
      };
    case VER_REQUEST_FAILURE:
      return {
        ...state,
        request: {},
        isLoading: false,
      };
    case CONFIRM_VER_FAILURE:
      return {
        ...state,
        verifiedUser: {},
        isLoading: false,
      };
    default:
      return state;
  }
};

export default verificationReducer;
