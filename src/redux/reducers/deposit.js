import {
  DEPOSIT_FAILURE,
  DEPOSIT_LOADING,
  DEPOSIT_SUCCESS,
} from "../actionTypes";

const initialState = {
  userDetails : [],
  packageOption: "",
  isUser: null,
  isLoading: false,
  proof_of_payment: null,
};

const depositReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DEPOSIT_SUCCESS:
      return {
        ...state,
        userDetails: action.payload.data,
        isLoading: false,
      };
    case DEPOSIT_FAILURE:
      return {
        ...state,
        userDetails: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default depositReducer;
