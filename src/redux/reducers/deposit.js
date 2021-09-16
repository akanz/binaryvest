import {
  DEPOSIT_FAILURE,
  DEPOSIT_LOADING,
  DEPOSIT_SUCCESS,
  SAVE_DETAILS_ERROR,
  SAVE_DETAILS_SUCCESS,
  WITHDRAW_ERROR,
  WITHDRAW_SUCCESS,
} from "../actionTypes";

const initialState = {
  userDetails: [],
  cardDetails: [],
  packageOption: "",
  isUser: null,
  withdraw: [],
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
    case SAVE_DETAILS_SUCCESS:
      return {
        ...state,
        cardDetails: action.payload,
        isLoading: false,
      };
    case SAVE_DETAILS_ERROR:
      return {
        ...state,
        cardDetails: [],
        isLoading: false,
      };
    case WITHDRAW_SUCCESS:
      return {
        ...state,
        withdraw: action.payload,
        isLoading: false,
      };
    case WITHDRAW_ERROR:
      return {
        ...state,
        withdraw: [],
        isLoading: false,
      };
    default:
      return state;
  }
};

export default depositReducer;
