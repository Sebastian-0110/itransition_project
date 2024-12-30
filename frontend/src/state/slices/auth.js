import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	isLoggedIn: false,
	isAdmin: false,
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setLoggedIn: (state, action) => {
			state.isLoggedIn = action.payload
		},

		setAdmin: (state, action) => {
			state.isAdmin = action.payload
		},
	}
});

export const authReducer = authSlice.reducer;
export const { setLoggedIn, setAdmin } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsAdmin = (state) => state.auth.isAdmin;