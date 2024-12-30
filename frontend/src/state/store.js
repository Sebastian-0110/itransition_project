import { configureStore } from "@reduxjs/toolkit";
import { themeSlice, authSlice } from "./slices";

const store = configureStore({
	reducer: {
		theme: themeSlice.themeReducer,
		auth: authSlice.authReducer,
	},
})

export default store;