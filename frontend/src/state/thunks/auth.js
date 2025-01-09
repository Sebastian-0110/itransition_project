import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchAuthState from "src/api/fetchAuthState.js";
import logoutFromServer from "src/api/logout.js";
import { clearUser } from "../slices/auth.js";

export const getAuthState = createAsyncThunk(
	"auth/fetchAuthState",
	async (_, { rejectWithValue }) => {
		const result = await fetchAuthState();

		if (!result.success) return rejectWithValue(result.error);
		return result.data;
	},
);

export const logout = createAsyncThunk(
	"auth/logout",
	async (_, { rejectWithValue, dispatch }) => {
		const result = await logoutFromServer();

		if (!result.success) {
			console.log("Couldn't logout: " + JSON.stringify(result.error));
			return rejectWithValue(result.error);
		}

		dispatch(clearUser());
	}
)