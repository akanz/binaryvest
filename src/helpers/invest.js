import * as Yup from "yup";
import axios from "axios";
import { tokenConfig } from "../redux/actions/auth";
import {
  GET_PLANS_FAILURE,
  GET_PLANS_LOADING,
  GET_PLANS_SUCCESS,
} from "../redux/actionTypes";
import { setMessage } from "../redux/actions/message";

axios.defaults.baseURL = "https://binaryvest.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const initialValues = {
  email: "",
  amount: "",
};
export const validationSchema = Yup.object({
  // packageOption: Yup.string().required("Select a package"),
  // email: Yup.string()
  //   .email("Email is not valid")
  //   .required("Please input your email"),
  amount: Yup.number("Amount is not valid").required("Enter an amount"),
});
export const payOptions = [
  { key: "crypto", value: "crypto", id: "1", text: "Pay with Cryptocurrency" },
  { key: "card", value: "card", id: "2", text: "Pay with Card" },
];

// export const packageOptions = [
//   {
//     key: "Standard ( 35% ROI )",
//     value: "standard",
//     id: "1",
//     text: "Amount ( Between $50 - $499)",
//   },
//   {
//     key: " Ruby( 45% ROI )",
//     value: "ruby",
//     id: "2",
//     text: "Amount ( Between $500 - $4,999)",
//   },
//   {
//     key: "Gold ( 60% ROI )",
//     value: "gold",
//     id: "3",
//     text: "Amount ( Between $5000 - $49,999)",
//   },
//   {
//     key: "Diamond ( 70% ROI )",
//     value: "diamond",
//     id: "4",
//     text: "Amount ( Between $50000 - $499,999)",
//   },
//   {
//     key: "Platinum ( > 80% ROI )",
//     value: "platinum",
//     id: "5",
//     text: "Amount ($500,000 and Above)",
//   },
// ];
export let packageOptions = [];
export const getPlans = () => async (dispatch) => {
  dispatch({
    type: GET_PLANS_LOADING,
  });
  try {
    const res = await axios.get("/admin/investmentPlans");
    const data = await res.data.data;
    packageOptions = data.map((data) => data);
    console.log(packageOptions);
    dispatch({
      type: GET_PLANS_SUCCESS,
    });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: GET_PLANS_FAILURE,
    });
    dispatch(setMessage("Unable to Get plans", 400, GET_PLANS_FAILURE));
  }
};
