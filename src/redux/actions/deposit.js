import {
  DEPOSIT_FAILURE,
  DEPOSIT_SUCCESS,
  PROOF_OF_PAY_FAIL,
  PROOF_OF_PAY_SUCCESS,
} from "../actionTypes";
import { setMessage } from "./message";

export const deposit = (data) => (dispatch) => {
  try {
    dispatch({
      type: DEPOSIT_SUCCESS,
      payload: data,
    });
    dispatch(setMessage("Deposit was successful", 200, DEPOSIT_SUCCESS));
    console.log(data);
  } catch (err) {
    dispatch({
      type: DEPOSIT_FAILURE,
    });
    dispatch(setMessage("Transaction failed", 403, DEPOSIT_FAILURE));
  }
};

export const proofOfPayment = (data) => (dispatch) => {
  try {
    dispatch({
      type: PROOF_OF_PAY_SUCCESS,
      payload: data,
    });
    dispatch(
      setMessage("Proof of payment uploaded", 200, PROOF_OF_PAY_SUCCESS)
    );
    console.log(data);
  } catch (error) {
    dispatch({
      type: PROOF_OF_PAY_FAIL,
    });
    dispatch(setMessage("Unable to upload", 403, PROOF_OF_PAY_FAIL));
  }
};
