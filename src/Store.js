import { configureStore } from "@reduxjs/toolkit";
import accounslice from "./reducers/accounslice";

const store = configureStore({
  reducer: {
    account: accounslice,
  },
});
export default store;
