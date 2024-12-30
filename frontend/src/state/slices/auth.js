import { createSlice } from "@reduxjs/toolkit";


const initialState = {
	isLoggedIn: false,
	user: null,
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
	}
});

export const authReducer = authSlice.reducer;
export const { setLoggedIn, setUser } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;