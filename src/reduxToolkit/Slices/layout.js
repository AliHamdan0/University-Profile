import { createSlice } from "@reduxjs/toolkit";

// in this way we combine the reduces and actions together

const initialState = {
  layout: [
    { id: "statistics", content: "statistics" },
    { id: "impressive_topics", content: "impressive_topics" },
    { id: "main_design", content: "main_design" },
    { id: "features", content: "features" },
    { id: "parallax_variation", content: "parallax_variation" },
    { id: "parallax_support", content: "parallax_support" },
    { id: "Info", content: "info" },
    { id: "clients", content: "clients" },
    { id: "contact", content: "contact" },
  ],
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    //normal reduce that don't need for any logic ar api call
    layout(state, action) {
      state.layout = action.payload; // its enough because of immer
    },
  },
});
