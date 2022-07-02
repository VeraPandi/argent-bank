import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../features/reducer";

/**
 * Redux store
 */

const store = configureStore({
   reducer: {
      auth: userReducer,
   },
});

export default store;
