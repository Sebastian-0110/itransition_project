import { createAsyncThunk } from "@reduxjs/toolkit";
import { endpoint } from "src/config/api.js";

export const fetchAuthState = createAsyncThunk(
	"auth/fetchAuthState",
	async (_, { rejectWithValue }) => {
		try {
			const result = await fetch(endpoint("/auth/status"), {
				method: "GET",
				headers: { "Accept": "application/json" }
			});

			const response = await result.json();
			if (!result.ok) return rejectWithValue(response);
			return response;
		}

		catch (error) {
			return rejectWithValue({ message: error.message });
		}
	},
);