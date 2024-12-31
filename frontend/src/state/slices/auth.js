import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthState } from "../thunks/auth.js";

const initialState = {
	isLoggedIn: false,
	user: null,
	isDoneLoading: null,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload;
		},

		setUser: (state, action) => {
			state.user = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthState.pending, (state) => {
			state.isDoneLoading = false;
		});

		builder.addCase(fetchAuthState.fulfilled, (state, action) => {
			state.isLoggedIn = true;
			state.user = action.payload;
			state.isDoneLoading = true;
		});

		builder.addCase(fetchAuthState.rejected, (state) => {
			state.isDoneLoading = true;
		});
	},
});

export const authReducer = authSlice.reducer;
export const { setLoggedIn, setUser } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;
export const selectIsDoneLoading = (state) => state.auth.isDoneLoading;