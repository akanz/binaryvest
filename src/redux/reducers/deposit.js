import {
  DEPOSIT_FAILURE,
  DEPOSIT_LOADING,
  DEPOSIT_SUCCESS,
  PROOF_OF_PAY_FAIL,
  PROOF_OF_PAY_SUCCESS,
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
    case PROOF_OF_PAY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        proof_of_payment: action.payload,
      };
    case PROOF_OF_PAY_FAIL:
      return {
        ...state,
        isLoading: false,
        proof_of_payment: null,
      };
    default:
      return state;
  }
};

export default depositReducer;
