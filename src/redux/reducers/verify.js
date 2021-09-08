import {
  VERIFICATION_FAILURE,
  VERIFICATION_LOADING,
  VERIFICATION_SUCCESS,
} from "../actionTypes";

const initialState = {
  email: null,
  phone_no: null,
  ssn: null,
  id_type: null,
  frontPage: null,
  backPage: null,
  isLoading: false,
};

const verificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case VERIFICATION_LOADING:
      return { ...state, isLoading: true };
    case VERIFICATION_SUCCESS:
      return { ...state, ...action.payload, isLoading: false };
    case VERIFICATION_FAILURE:
      return state;
    default:
      return state;
  }
};

export default verificationReducer;
