import {
  DEPOSIT_FAILURE,
  DEPOSIT_LOADING,
  DEPOSIT_SUCCESS,
} from "../actionTypes";

const initialState = {
  packageOption: "",
  email: "",
  amount: null,
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
        ...action.payload,
        isLoading: false,
      };
    case DEPOSIT_FAILURE:
      return {
        ...state,
        amount: null,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default depositReducer;
