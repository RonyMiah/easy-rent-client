import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReducer from "./redux/loginReducer";
import userReducer from "./redux/userReducer";


export default configureStore({
  reducer: {
    regis: userReducer,
    login: loginReducer,

  }
});


