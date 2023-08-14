import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/task.slice";
// import productReducer from "./product/product.slice";
// import filterReducer from "./product/filter.slice";

export default configureStore({
  reducer: {
    task: taskReducer,
  },
});
