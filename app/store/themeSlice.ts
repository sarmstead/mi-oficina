import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = themeSlice.actions;

export default themeSlice.reducer;
