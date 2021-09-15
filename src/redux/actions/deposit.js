import {
  CONFIRM_DEP_SUCCESS,
  DEPOSIT_FAILURE,
  DEPOSIT_LOADING,
  DEPOSIT_SUCCESS,
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

  // const data = {
  //   planId: values.packageOption.id,
  //   email: values.email,
  //   amount: values.amount,
  // };

  dispatch({
    type: DEPOSIT_LOADING,
  });
  axios
    .post("/user/invest", values, customHeader)
    .then((res) => {
      console.log(res.data);
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
      console.log(err.response);
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
