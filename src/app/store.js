import { configureStore } from "@reduxjs/toolkit";
import githubReducer from "../fetaures/github/githubSlice.js";

export const store = configureStore({
  reducer: {
    users: githubReducer,
  },
});
