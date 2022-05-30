import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isMobile: false,
};

export const headerSlice = createSlice({
	name: "mobile",
	initialState,
	// The `reducers` field lets us define reducers and generate associated actions
	reducers: {
		setSmallWidth: (state) => {
			state.isMobile = true;
		},
		setLargeWidth: (state) => {
			state.isMobile = false;
		},
	},
});

export const { setSmallWidth, setLargeWidth } = headerSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectWidth = (state) => state.mobile.isMobile;

export default headerSlice.reducer;
