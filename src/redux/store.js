import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
const store = configureStore({
  reducer: rootreducer,
});
//console.log("store items", store)
export default store;
