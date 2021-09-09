import {
  CONFIRM_DEP_FAILURE,
  CONFIRM_DEP_LOADING,
  CONFIRM_DEP_SUCCESS,
  CONFIRM_VER_LOADING,
  CONFIRM_VER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  VERIFICATION_FAILURE,
  VERIFICATION_SUCCESS,
} from "../actionTypes";

const initialState = {
  user_details: {},
  isVerified: false,
  isLoading: false,
  documents: null,
  wallet: 0,
  profile_pic: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONFIRM_DEP_LOADING:
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
