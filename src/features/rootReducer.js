import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    user: userSlice,
});

export default rootReducer;
