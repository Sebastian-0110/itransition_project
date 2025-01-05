import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchAuthState from "src/api/fetchAuthState.js";

export const getAuthState = createAsyncThunk(
	"auth/fetchAuthState",
	async (_, { rejectWithValue }) => {
		const result = await fetchAuthState();

		if (!result.success) return rejectWithValue(result.error);
		return result;
	},
);