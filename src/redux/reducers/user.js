import {
  CONFIRM_DEP_FAILURE,
  CONFIRM_DEP_LOADING,
  CONFIRM_DEP_SUCCESS,
  CONFIRM_VER_FAILURE,
  CONFIRM_VER_LOADING,
  CONFIRM_VER_SUCCESS,
  COURSE_DEP_FAILURE,
  COURSE_DEP_LOADING,
  COURSE_DEP_SUCCESS,
  DEPOSITS_ERROR,
  DEPOSITS_LOADING,
  DEPOSITS_SUCCESS,
  USER_DEPS_FAILURE,
  USER_DEPS_LOADING,
  USER_DEPS_SUCCESS,
  VERIFICATION_FAILURE,
  VERIFICATION_SUCCESS,
} from "../actionTypes";

const initialState = {
  user_details: {},
  isVerified: false,
  isLoading: false,
  documents: null,
  deposits: null,
  wallet: 0,
  education: {},
  profile_pic: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_DEP_LOADING:
    case DEPOSITS_LOADING:
    case USER_DEPS_LOADING:
    case COURSE_DEP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CONFIRM_DEP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user_details: action.payload,
        wallet: state.wallet + parseFloat(action.payload.amount),
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        documents: action.payload,
        isLoading: false,
      };
    case CONFIRM_VER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CONFIRM_VER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isVerified: true,
      };
    case CONFIRM_DEP_FAILURE:
      return {
        ...state,
        user_details: [],
        isLoading: false,
      };
    case CONFIRM_VER_FAILURE:
      return {
        ...state,
        isVerified: false,
        isLoading: false,
      };
    case USER_DEPS_SUCCESS:
      return {
        ...state,
        deposits: action.payload,
        isLoading: false,
      };
    case USER_DEPS_FAILURE:
      return {
        ...state,
        deposits: null,
        isLoading: false,
      };
    case COURSE_DEP_SUCCESS:
      return {
        ...state,
        education: action.payload,
        isLoading: false,
      };
    case COURSE_DEP_FAILURE:
      return {
        ...state,
        education: {},
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
