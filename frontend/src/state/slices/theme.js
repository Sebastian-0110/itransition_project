import { createSlice } from "@reduxjs/toolkit";


export const themes = {light: "light", dark: "dark" };

const initialState = {
	value: localStorage.getItem("theme") || themes.light,
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		set: (state, action) => {
			state.value = action.payload;
		},

		toggle: (state) => {
			state.value = state.value === themes.light ? themes.dark: themes.light;
		}
	}
});

export const themeReducer = themeSlice.reducer;
export const { set, toggle } = themeSlice.actions;

export const selectTheme = (state) => state.theme.value;
export const selectContrastColor = (state) => selectTheme(state) === themes.light ? "#000" : "#FFF";

