import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/reducers/auth";
import depositReducer from "./redux/reducers/deposit";
import messageReducer from "./redux/reducers/message";
import userReducer from "./redux/reducers/user";
import verificationReducer from "./redux/reducers/verify";

const store = configureStore({
    reducer: {
        auth: authReducer,
        message: messageReducer,
        user: userReducer,
        deposit: depositReducer,
        verify: verificationReducer,
    }
})

export default store
 