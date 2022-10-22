import { configureStore } from "@reduxjs/toolkit";
import { layoutSlice } from "./Slices/layout";
import { themeSlice } from "./Slices/themes";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
export const store = configureStore({
  reducer: combineReducers({
    layoutSlice: layoutSlice.reducer,
    themeSlice: themeSlice.reducer,
  }),
});
setupListeners(store.dispatch);
