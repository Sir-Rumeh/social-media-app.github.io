import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import headerReducer from "../features/Header/headerSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		mobile: headerReducer,
	},
});
