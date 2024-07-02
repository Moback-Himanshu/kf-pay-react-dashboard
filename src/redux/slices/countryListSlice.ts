import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface CountyListState {
	countryList: any;
	countryDetail: string;
}

const initialState: CountyListState = {
	countryList: {} as any,
	countryDetail: ''
};

export const countryListSlice = createSlice({
	name: 'countryList',
	initialState,
	reducers: {
		setCountryList(state, action: PayloadAction<any>) {
			state.countryList = action.payload;
		}
	},
});

export const { setCountryList } = countryListSlice.actions;
export const selectCountryList = (state: RootState) => state.countryList;
export default countryListSlice.reducer;