import { CONFIRM_DEP_SUCCESS, CONFIRM_VER_SUCCESS } from "../actionTypes";
import { setMessage } from "./message";

export const confirmDeposit = (data) => (dispatch) => {
  try {
    dispatch({
      type: CONFIRM_DEP_SUCCESS,
      payload: data,
    });
    dispatch(
      setMessage("Deposit has been authorized", 200, CONFIRM_DEP_SUCCESS)
    );
  } catch (err) {
    console.log(err);
  }
};

export const verifyUser = (value) => (dispatch) => {
  try {
    dispatch({
      type: CONFIRM_VER_SUCCESS,
      payload: value,
    });
    dispatch(
      setMessage(
        "User has been successfully verified",
        200,
        CONFIRM_VER_SUCCESS
      )
    );
  } catch (err) {
    console.log(err);
  }
};
