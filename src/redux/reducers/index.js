import { combineReducers } from "redux";
import authReducer from "./auth";
import depositReducer from "./deposit";
import messageReducer from "./message";
import userReducer from "./user";
import verificationReducer from "./verify";

const rootReducer = combineReducers({
  auth: authReducer,
  msg: messageReducer,
  deposit: depositReducer,
  verify: verificationReducer,
  user: userReducer,
});

export default rootReducer;
