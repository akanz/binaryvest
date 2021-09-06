import {
  CONFIRM_DEP_FAILURE,
  CONFIRM_DEP_LOADING,
  CONFIRM_DEP_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  VERIFICATION_FAILURE,
  VERIFICATION_SUCCESS,
} from "../actionTypes";

const initialState = {
  username: "",
  email: "",
  isVerified: false,
  isLoading: false,
  documents: null,
  wallet: 0,
  profile_pic: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case CONFIRM_DEP_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case CONFIRM_DEP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        wallet: state.wallet + action.payload,
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case CONFIRM_DEP_FAILURE:
    case VERIFICATION_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default userReducer;
