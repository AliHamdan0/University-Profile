import { createSlice } from "@reduxjs/toolkit";
// in this way we combine the reduces and actions together

const initialState = {
  theme: {
    primaryColor: "#0087AB",
    fontFamily: "Roboto",
    fontSize: "1",
  },
};

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    primaryColor(state, action) {
      state.theme.primaryColor = action.payload; // its enough because of immer
    },
    fontFamily(state, action) {
      state.theme.fontFamily = action.payload; // its enough because of immer
    },
    fontSize(state, action) {
      state.theme.fontSize = action.payload; // its enough because of immer
    },
  },
});
