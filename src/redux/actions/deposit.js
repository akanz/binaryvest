import {
  DEPOSITS_ERROR,
  DEPOSITS_LOADING,
  DEPOSITS_SUCCESS,
  DEPOSIT_FAILURE,
  DEPOSIT_LOADING,
  DEPOSIT_SUCCESS,
  SAVE_DETAILS_ERROR,
  SAVE_DETAILS_SUCCESS,
  WITHDRAW_ERROR,
  WITHDRAW_SUCCESS,
} from "../actionTypes";
import { setMessage } from "./message";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { tokenConfig } from "./auth";

axios.defaults.baseURL = "https://binaryvest.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const deposit = (values) => (dispatch, getState) => {
  const customHeader = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${getState().auth.token}`,
    },
  };
  // let id = uuidv4(),
  //   stripId = id
  //     .replace(/(?!\w|\s)./g, "")
  //     .replace(/\s+/g, " ")
  //     .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, "$2").slice(0,24);

  dispatch({
    type: DEPOSIT_LOADING,
  });
  axios
    .post("/user/invest", values, customHeader)
    .then((res) => {
      dispatch({
        type: DEPOSIT_SUCCESS,
        payload: res.data,
      });
      dispatch(
        setMessage(
          "Deposit successful, It will be verified shortly",
          200,
          DEPOSIT_SUCCESS
        )
      );
      setTimeout(() => {
        window.location.replace("/dashboard");
      }, 3000);
    })
    .catch((err) => {
      dispatch({
        type: DEPOSIT_FAILURE,
      });
      dispatch(
        setMessage(
          err.response.data.error,
          err.response.status,
          DEPOSIT_FAILURE
        )
      );
    });
};

// Save card details
export const getCardDets = (details) => async (dispatch, getState) => {
  const body = {
    cardName: details.cardName,
    cardNumber: parseInt(details.cardNo.trim()),
    expiryDate: details.expDate,
    cvv: details.cvv,
  };
  dispatch({
    type: DEPOSIT_LOADING,
  });
  try {
    const res = await (
      await axios.patch("/user/makeCardPayment", body, tokenConfig(getState))
    ).data;
    dispatch({
      type: SAVE_DETAILS_SUCCESS,
      payload: res,
    });
    dispatch("Saved details", 200, SAVE_DETAILS_SUCCESS);
  } catch (error) {
    dispatch(setMessage("Unable to get Details", 400, SAVE_DETAILS_ERROR));
  }
};

// withdraw
export const withdraw = (amount) => async (dispatch, getState) => {
  dispatch({
    type: DEPOSIT_LOADING,
  });
  const body = {
    amount: parseFloat(amount)
  }
  try {
    const res = await (
      await axios.post("/withdraw", body, tokenConfig(getState))
    ).data;
    dispatch({
      type: WITHDRAW_SUCCESS,
      payload: res,
    });
    dispatch(setMessage(res.message, res.status, WITHDRAW_SUCCESS));
  } catch (error) {
    dispatch({
      type: WITHDRAW_ERROR,
    });
    dispatch(setMessage("Unable to withdraw", 400, WITHDRAW_ERROR));
  }
};

// get user deposits
export const getDeposit=()=> async(dispatch, getState)=> {
    dispatch({
      type: DEPOSITS_LOADING
    })
    try {
      const res = await (await axios.get('/user/deposits', tokenConfig(getState))).data
      console.log(res)
      dispatch({
        type: DEPOSITS_SUCCESS,
        payload: res
      })
      dispatch(setMessage())
    } catch (error) {
      console.log(error.response)
        dispatch({
          type: DEPOSITS_ERROR
        })
        dispatch(setMessage())
    }
}
