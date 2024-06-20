import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		darkTheme: false,
	},
	reducers: {
		toggleTheme(state) {
			state.darkTheme = !state.darkTheme;
		},
		darkTheme(state) {
			state.darkTheme = true;
		},
		lightTheme(state) {
			state.darkTheme = false;
		},
	},
});

export const { toggleTheme, darkTheme, lightTheme } = themeSlice.actions;

export default themeSlice.reducer;